# SentinelAI Backend

## Overview

The SentinelAI Backend is built using **FastAPI** and serves as the core application responsible for processing security logs, orchestrating AI-driven threat analysis, managing database operations, and exposing RESTful APIs to the frontend.

The backend follows a modular architecture to ensure scalability, maintainability, and separation of concerns.

---
## Backend Architecture Philosophy

The backend follows a modular, service-oriented architecture where each layer has a single responsibility. Business logic is isolated from API routes, database access is abstracted through models and services, and AI workflows are encapsulated as independent agents to promote maintainability, scalability, and future extensibility.

---

## Technology Stack

- Python
- FastAPI
- SQLAlchemy
- PostgreSQL
- Google Gemini
- LangChain
- LangGraph
- ChromaDB

---

## Responsibilities

The backend is responsible for:

- User Authentication
- Security Log Upload
- Log Parsing
- Threat Detection
- AI Orchestration
- Incident Report Generation
- Database Operations
- REST API Management

---

## Project Structure

```
backend/
│
├── app/
│   ├── api/
│   ├── services/
│   ├── models/
│   ├── schemas/
│   ├── database/
│   ├── agents/
│   ├── prompts/
│   ├── utils/
│   ├── core/
│   └── main.py
│
├── requirements.txt
├── .env
└── README.md
```

---

## Module Description

### api/

Contains all REST API endpoints exposed by the backend.

Examples:

- Authentication APIs
- Log Upload APIs
- Dashboard APIs
- Investigation APIs
- AI Chat APIs

---

### services/

Contains the application's business logic.

Examples:

- Log Processing
- Threat Analysis
- Report Generation

---

### models/

Contains SQLAlchemy database models.

Examples:

- Users
- Uploaded Logs
- Investigations
- Reports

---

### schemas/

Contains Pydantic request and response models used for API validation.

---

### database/

Contains PostgreSQL configuration, session management, and database connection utilities.

---

### agents/

Contains autonomous AI agents responsible for different stages of cybersecurity investigation.

Examples:

- Log Parsing Agent
- Threat Detection Agent
- Threat Intelligence Agent
- Risk Assessment Agent
- Incident Report Agent

---

### prompts/

Contains reusable prompt templates used by the AI models.

---

### utils/

Contains helper functions shared across the application.

---

### core/

Contains application configuration, environment settings, constants, and common utilities.

---

## Development Status

🚧 Active Development (MVP Phase)

Current focus:

- Backend Initialization
- REST API Development
- Database Integration
- AI Workflow Implementation

---

## Running the Application

Create a virtual environment

```bash
python -m venv venv
```

Activate the virtual environment

Windows

```bash
.\venv\Scripts\activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run the application

```bash
uvicorn app.main:app --reload
```

Open Swagger UI

```
http://127.0.0.1:8000/docs
```

---

