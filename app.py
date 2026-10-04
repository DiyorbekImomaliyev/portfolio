
import os
import sqlite3
from datetime import date, datetime
from hmac import compare_digest

import markdown
from dotenv import load_dotenv
from flask import Flask, abort, flash, redirect, render_template, request, session, url_for
from markupsafe import Markup

from projects import PROJECTS

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

load_dotenv(os.path.join(BASE_DIR, ".env"))

app = Flask(__name__)
app.secret_key = os.environ.get("SECRET_KEY") or os.urandom(24)
app.config["SESSION_COOKIE_SAMESITE"] = "Lax"

ADMIN_PASSWORD = os.environ.get("ADMIN_PASSWORD")
DATABASE = os.path.join(BASE_DIR, "blog.db")


def get_db():
    connection = sqlite3.connect(DATABASE)
    connection.row_factory = sqlite3.Row
    return connection


def create_table():
    with get_db() as db:
        db.execute("""
            CREATE TABLE IF NOT EXISTS posts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                summary TEXT NOT NULL,
                content TEXT NOT NULL,
                created_at TEXT NOT NULL
            )
        """)


def get_all_posts(limit=None):
    sql = "SELECT * FROM posts ORDER BY created_at DESC, id DESC"
    if limit:
        sql += f" LIMIT {int(limit)}"
    with get_db() as db:
        return db.execute(sql).fetchall()


def get_post(post_id):
    with get_db() as db:
        post = db.execute("SELECT * FROM posts WHERE id = ?", (post_id,)).fetchone()
    if post is None:
        abort(404)
    return post


create_table()


def is_admin():
    return session.get("is_admin") is True


@app.context_processor
def add_admin_flag():
    return {"is_admin": is_admin()}


@app.template_filter("markdown")
def markdown_to_html(text):
    return Markup(markdown.markdown(text, extensions=["fenced_code", "tables"]))


@app.template_filter("nice_date")
def nice_date(value):
    return datetime.strptime(value, "%Y-%m-%d").strftime("%d %b %Y")


@app.route("/")
def home():
    return render_template("index.html", projects=PROJECTS, posts=get_all_posts(limit=3))


@app.route("/blog")
def blog():
    return render_template("blog.html", posts=get_all_posts())


@app.route("/blog/<int:post_id>")
def show_post(post_id):
    return render_template("post.html", post=get_post(post_id))


@app.route("/qilich", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        password = request.form.get("password", "")

        if not ADMIN_PASSWORD:
            flash("ADMIN_PASSWORD is not set. Add it to your .env file.")
        elif compare_digest(password.encode(), ADMIN_PASSWORD.encode()):
            session["is_admin"] = True
            return redirect(url_for("admin"))
        else:
            flash("Wrong password.")

    return render_template("login.html")


@app.route("/qilich/logout")
def logout():
    session.clear()
    return redirect(url_for("home"))


@app.route("/qilich/posts")
def admin():
    if not is_admin():
        return redirect(url_for("login"))
    return render_template("admin.html", posts=get_all_posts())


@app.route("/qilich/new", methods=["GET", "POST"])
def new_post():
    if not is_admin():
        return redirect(url_for("login"))

    if request.method == "POST":
        title = request.form["title"].strip()
        summary = request.form["summary"].strip()
        content = request.form["content"].strip()

        if not title or not summary or not content:
            flash("Please fill in the title, summary and content.")
            return render_template("editor.html", post=request.form, heading="New post")

        with get_db() as db:
            db.execute(
                "INSERT INTO posts (title, summary, content, created_at) VALUES (?, ?, ?, ?)",
                (title, summary, content, date.today().isoformat()),
            )
        flash("Post published.")
        return redirect(url_for("admin"))

    return render_template("editor.html", post={}, heading="New post")


@app.route("/qilich/edit/<int:post_id>", methods=["GET", "POST"])
def edit_post(post_id):
    if not is_admin():
        return redirect(url_for("login"))

    post = get_post(post_id)

    if request.method == "POST":
        title = request.form["title"].strip()
        summary = request.form["summary"].strip()
        content = request.form["content"].strip()

        if not title or not summary or not content:
            flash("Please fill in the title, summary and content.")
            return render_template("editor.html", post=request.form, heading="Edit post")

        with get_db() as db:
            db.execute(
                "UPDATE posts SET title = ?, summary = ?, content = ? WHERE id = ?",
                (title, summary, content, post_id),
            )
        flash("Post updated.")
        return redirect(url_for("show_post", post_id=post_id))

    return render_template("editor.html", post=post, heading="Edit post")


@app.route("/qilich/delete/<int:post_id>", methods=["POST"])
def delete_post(post_id):
    if not is_admin():
        return redirect(url_for("login"))

    with get_db() as db:
        db.execute("DELETE FROM posts WHERE id = ?", (post_id,))
    flash("Post deleted.")
    return redirect(url_for("admin"))


if __name__ == "__main__":
    app.run(debug=True)
