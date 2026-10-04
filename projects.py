"""
Fields:
    id            short name with no spaces, used by the popup
    title         project name
    card_text     one sentence shown on the card
    summary       one sentence shown at the top of the popup
    what_i_did    list of short points
    result        one sentence, or "" to hide the Result section
    tools         list of tools, as one line
    demo_link     link to a live demo, or "" to hide the button
    code_link     link to the code, or "" to hide the button
    cover_image   image shown on the card, e.g. "images/rag-cover.png", or ""
    gallery       images and videos shown in the popup. Examples:
                      "images/rag-1.png"                          (image in static/images)
                      "videos/rag-demo.mp4"                       (video in static/videos)
                      "https://www.youtube.com/embed/VIDEO_ID"    (YouTube video)
"""

PROJECTS = [
    {
        "id": "rag-assistant",
        "title": "Bilingual RAG Assistant",
        "card_text": "Answers Arabic and English questions from English documentation.",
        "summary": "An AI assistant that answers Arabic and English questions from English product documentation, built at UPDIVE.",
        "what_i_did": [
            "Tuned document chunking for more accurate retrieval",
            "Implemented cross-lingual embedding search for Arabic queries",
            "Evaluated retrieval on a 50-question test set",
        ],
        "result": "94% top-3 retrieval recall.",
        "tools": "Python, RAG, embeddings, retrieval evaluation",
        "demo_link": "",
        "code_link": "",
        "cover_image": "images/rag-assistant-cover.png",
        "gallery": ["images/rag-assistant-cover.png"],
    },
    {
        "id": "speaking-bot",
        "title": "Speaking Practice Bot",
        "card_text": "Helps users practise IELTS speaking with instant AI feedback.",
        "summary": "A Telegram bot that helps users practise IELTS speaking with instant AI feedback.",
        "what_i_did": [
            "Built an async Python chatbot",
            "Integrated Whisper for speech transcription",
            "Used Gemini AI for corrections and suggestions",
            "Added user analytics with SQLite and deployed with Docker",
        ],
        "result": "",
        "tools": "Python, Whisper, Gemini, SQLite, Docker",
        "demo_link": "",
        "code_link": "",
        "cover_image": "images/speaking-bot-cover.png",
        "gallery": ["images/speaking-bot-cover.png"],
    },
    {
        "id": "translation-tool",
        "title": "Cross-Language Communication Tool",
        "card_text": "Translates Uzbek, English and Arabic in real time, by voice or text.",
        "summary": "A real-time Uzbek, English and Arabic translator for voice and text, co-developed with a teammate.",
        "what_i_did": [
            "Built voice and text translation across three languages",
            "Implemented AI-powered payment verification",
            "Delivered an admin dashboard for analytics and subscriptions",
        ],
        "result": "95%+ translation accuracy and 85% fewer manual payment checks.",
        "tools": "Python, AI speech and translation models",
        "demo_link": "",
        "code_link": "",
        "cover_image": "images/translation-tool-cover.png",
        "gallery": ["images/translation-tool-cover.png"],
    },
    {
        "id": "fraud-detection",
        "title": "Fraud Detection Model",
        "card_text": "Detects rare fraud cases in highly imbalanced data.",
        "summary": "Fraud detection models for highly imbalanced data, built at OrbiDefence in a 5-person team.",
        "what_i_did": [
            "Performed EDA and feature engineering",
            "Balanced the data with SMOTE",
            "Selected thresholds with stratified cross-validation",
            "Deployed the model with Flask, Docker and AWS",
        ],
        "result": "Higher fraud recall while keeping precision.",
        "tools": "Python, scikit-learn, Pandas, Flask, Docker, AWS",
        "demo_link": "",
        "code_link": "",
        "cover_image": "images/fraud-detection-live-queue.png",
        "gallery": [
            "images/fraud-detection-live-queue.png",
            "images/fraud-detection-score-transaction.png",
        ],
    },
    {
        "id": "player-performance",
        "title": "Computer Vision Player Performance Platform",
        "card_text": "Tracks player performance and generates football highlights.",
        "summary": "A computer vision platform for tracking football players, measuring performance, and generating match highlights. Currently in development.",
        "what_i_did": [
            "Built player tracking and performance analysis workflows",
            "Developed automated highlight generation from match footage",
            "Currently refining the tracking and highlight-generation pipeline",
        ],
        "result": "Currently in development.",
        "tools": "Python, computer vision, object tracking, video analytics",
        "demo_link": "",
        "code_link": "",
        "cover_image": "images/player-performance-highlights-cover.png",
        "gallery": [
            "images/player-performance-highlights-cover.png",
            "videos/player-performance-tracking.mp4",
            "videos/player-performance-highlights.mp4",
        ],
    },
]
