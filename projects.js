/* ============================================================
   ALL PROJECTS LIVE HERE. Add a project by copying one block.
   gallery item types:
     { type: "image",   src: "images/x.jpg", alt: "..." }
     { type: "video",   src: "videos/x.mp4", poster: "images/x.jpg" }
     { type: "youtube", id: "VIDEO_ID" }
   links: { label, url, primary: true|false }
   ============================================================ */
const PROJECTS = [
  {
    id: "doorstep",
    title: "Doorstep",
    tag: "PayPal AI Hackathon 2026 · Live",
    card: "AI agent for small PayPal sellers that audits delivery scans, refunds buyers and drafts carrier claims.",
    summary: "A live AI agent for small PayPal sellers, built for the PayPal AI Hackathon 2026 with Claude Code. It audits the courier's \"Delivered\" scan, refunds the buyer through PayPal and drafts a carrier claim in which every sentence cites a checked fact.",
    did: [
      "Kept AI away from money: refunds go through one policy gate and an idempotent outbox, with signed receipts",
      "Integrated PayPal Orders, Refunds, Disputes and webhooks",
      "Steered the build with specs and CI gates, including mutation testing on money code"
    ],
    result: "0 unsafe replies reached buyers in 64 injection probes. 2,017 tests with full branch coverage.",
    tools: "Python, PayPal API, LLM agents, Claude Code, CI",
    cover: "images/doorstep/control-room.jpg",
    gallery: [
      { type: "youtube", id: "z5owHAEQOGk" },
      { type: "image", src: "images/doorstep/control-room.jpg", alt: "Delivery control room dashboard" },
      { type: "image", src: "images/doorstep/case.jpg", alt: "Case view with refund recommendation" },
      { type: "image", src: "images/doorstep/money.jpg", alt: "Money overview" },
      { type: "image", src: "images/doorstep/proof.jpg", alt: "Proof of delivery checks" },
      { type: "image", src: "images/doorstep/policy.jpg", alt: "Refund policy" }
    ],
    links: [
      { label: "Live demo", url: "https://doorstep-ojmg.onrender.com/", primary: true },
      { label: "Video", url: "https://www.youtube.com/watch?v=z5owHAEQOGk" },
      { label: "Code", url: "https://github.com/DiyorbekImomaliyev/doorstep" }
    ]
  },
  {
    id: "bandwidth",
    title: "Bandwidth",
    tag: "Python · Local LLM · Privacy by design",
    card: "Private Telegram agent that plans the study day, ranks opportunities and fills in applications.",
    summary: "A private AI agent for students on Telegram, built with Claude Code. It plans your study day, finds opportunities that fit you and fills in the applications.",
    did: [
      "Planned the study day from the D2L calendar, with alerts before every deadline",
      "Ranked openings from about 40 sources against the user's interests",
      "Filled application forms on any site (Greenhouse, Lever, Google Forms), submitting only after the user approves",
      "Enforced privacy in code: personal data stays on a local LLM, and cloud calls containing private terms are blocked"
    ],
    result: "",
    tools: "Python, Telegram Bot API, local LLM, browser automation, Claude Code",
    cover: "images/bandwidth/chat.svg",
    gallery: [
      { type: "image", src: "images/bandwidth/chat.svg", alt: "Bandwidth Telegram conversation (illustration)" }
    ],
    links: [
      { label: "Code", url: "https://github.com/DiyorbekImomaliyev/bandwidth", primary: true }
    ]
  },
  {
    id: "card-fraud",
    title: "Card-Fraud Detection System",
    tag: "XGBoost · SHAP · 0.984 PR-AUC",
    card: "End-to-end ML pipeline comparing 12 models, with a drift study and SHAP explanations.",
    summary: "An end-to-end machine learning pipeline for card fraud, built with Claude Code.",
    did: [
      "Generated a 151K-transaction synthetic card dataset (75 features, 1.5% fraud, 7 fraud types) with a time-ordered split",
      "Compared 12 models, from logistic regression to XGBoost, CatBoost and neural nets, with paired-bootstrap tests",
      "Showed in a controlled concept-drift study that a static model decays as fraud adapts and retraining recovers it",
      "Explained predictions with SHAP and scored each transaction in 5.6 ms"
    ],
    result: "XGBoost led at 0.984 test PR-AUC, catching 251 of 273 frauds with 5 false alarms.",
    tools: "Python, XGBoost, CatBoost, scikit-learn, SHAP, Pandas",
    cover: "images/fraud/fig9_curves.jpg",
    fit: "contain",
    gallery: [
      { type: "image", src: "images/fraud/fig1_overview.jpg", alt: "Dataset overview" },
      { type: "image", src: "images/fraud/fig9_curves.jpg", alt: "Precision-recall and ROC curves for six models" },
      { type: "image", src: "images/fraud/fig13_shap_global.jpg", alt: "SHAP global feature importance" },
      { type: "image", src: "images/fraud/fig17_drift.jpg", alt: "Concept drift study" },
      { type: "image", src: "images/fraud/fig18_retraining.jpg", alt: "Retraining recovers performance" }
    ],
    links: [
      { label: "Code", url: "https://github.com/DiyorbekImomaliyev/fraud-detection-system-last", primary: true }
    ]
  },
  {
    id: "federated",
    title: "Federated Learning for Energy",
    tag: "Research · UDST Energy Research Team",
    card: "Research on training forecasting models on edge devices without sharing raw energy data.",
    summary: "Undergraduate research with the UDST Energy Research Team (5 students), 2026 to present. Studying federated training on edge devices: each site shares only model updates, so raw energy data stays local.",
    did: [
      "Building reproducible forecasting and optimisation experiments in Python"
    ],
    result: "",
    tools: "Python, federated learning, time-series forecasting",
    cover: "images/research/federated.svg",
    gallery: [
      { type: "image", src: "images/research/federated.svg", alt: "Federated learning diagram (illustration)" }
    ],
    links: [
      { label: "Code", url: "https://github.com/DiyorbekImomaliyev/edge-fl-energy", primary: true },
      { label: "Drive", url: "https://drive.google.com/drive/folders/1R_4AgQUpk91XsrJ2mACnljvmEStVPRPk" }
    ]
  },
  {
    id: "rag-assistant",
    title: "Bilingual RAG Assistant",
    tag: "UPDIVE · RAG · Arabic / English",
    card: "Answers Arabic and English questions from English documentation.",
    summary: "An AI assistant that answers Arabic and English questions from English product documentation, built at UPDIVE.",
    did: [
      "Tuned document chunking for more accurate retrieval",
      "Implemented cross-lingual embedding search for Arabic queries",
      "Evaluated retrieval on a 50-question test set"
    ],
    result: "94% top-3 retrieval recall.",
    tools: "Python, RAG, embeddings, retrieval evaluation",
    cover: "images/rag/cover.jpg",
    gallery: [
      { type: "image", src: "images/rag/cover.jpg", alt: "Bilingual RAG assistant" }
    ],
    links: []
  },
  {
    id: "speaking-bot",
    title: "Speaking Practice Bot",
    tag: "Telegram · Whisper · Gemini",
    card: "Helps users practise IELTS speaking with instant AI feedback.",
    summary: "A Telegram bot that helps users practise IELTS speaking with instant AI feedback.",
    did: [
      "Built an async Python chatbot",
      "Integrated Whisper for speech transcription",
      "Used Gemini AI for corrections and suggestions",
      "Added user analytics with SQLite and deployed with Docker"
    ],
    result: "",
    tools: "Python, Whisper, Gemini, SQLite, Docker",
    cover: "images/speaking/cover.jpg",
    gallery: [
      { type: "image", src: "images/speaking/cover.jpg", alt: "Speaking practice bot" }
    ],
    links: []
  },
  {
    id: "translation-tool",
    title: "Cross-Language Communication Tool",
    tag: "Uzbek · English · Arabic",
    card: "Translates Uzbek, English and Arabic in real time, by voice or text.",
    summary: "A real-time Uzbek, English and Arabic translator for voice and text, co-developed with a teammate.",
    did: [
      "Built voice and text translation across three languages",
      "Implemented AI-powered payment verification",
      "Delivered an admin dashboard for analytics and subscriptions"
    ],
    result: "95%+ translation accuracy and 85% fewer manual payment checks.",
    tools: "Python, AI speech and translation models",
    cover: "images/translation/cover.jpg",
    gallery: [
      { type: "image", src: "images/translation/cover.jpg", alt: "Cross-language communication tool" }
    ],
    links: []
  },
  {
    id: "orbi-fraud",
    title: "Fraud Detection at OrbiDefence",
    tag: "SMOTE · Flask · Docker · AWS",
    card: "Detects rare fraud cases in highly imbalanced data, deployed as an API for B2B clients.",
    summary: "Fraud detection models for highly imbalanced data, built at OrbiDefence in a 5-person team.",
    did: [
      "Performed EDA and feature engineering",
      "Balanced the data with SMOTE",
      "Owned validation: set thresholds with stratified cross-validation that held precision while recovering missed fraud",
      "Deployed the model as a Dockerized Flask API on AWS, keeping client data and model IP protected"
    ],
    result: "Higher fraud recall while keeping precision.",
    tools: "Python, scikit-learn, Pandas, Flask, Docker, AWS",
    cover: "images/orbi/live-queue.jpg",
    fit: "contain",
    gallery: [
      { type: "image", src: "images/orbi/live-queue.jpg", alt: "Live fraud review queue" },
      { type: "image", src: "images/orbi/score.jpg", alt: "Score a transaction" }
    ],
    links: []
  },
  {
    id: "player-performance",
    title: "Player Performance Platform",
    tag: "Computer vision · In development",
    card: "Tracks football players, measures performance and generates match highlights.",
    summary: "A computer vision platform for tracking football players, measuring performance and generating match highlights. Currently in development.",
    did: [
      "Built player tracking and performance analysis workflows",
      "Developed automated highlight generation from match footage",
      "Currently refining the tracking and highlight-generation pipeline"
    ],
    result: "",
    tools: "Python, computer vision, object tracking, video analytics",
    cover: "images/players/cover.jpg",
    gallery: [
      { type: "image", src: "images/players/cover.jpg", alt: "Match highlights" },
      { type: "video", src: "videos/player-tracking.mp4", poster: "images/players/cover.jpg", alt: "Player tracking demo" },
      { type: "video", src: "videos/player-highlights.mp4", poster: "images/players/cover.jpg", alt: "Highlight generation demo" }
    ],
    links: []
  }
];
