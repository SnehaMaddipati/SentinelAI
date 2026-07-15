# High Level Design (HLD)

# SentinelAI

## Autonomous Multi-Agent Security Operations Center (AI-SOC)

**Version:** 1.0

**Status:** Design Phase

**Author:** Sneha M

---

# 1. Overview

SentinelAI is an AI-powered Security Operations Center (AI-SOC) designed to automate the initial stages of cybersecurity incident investigation.

The application enables security analysts to upload security logs, automatically analyze potential threats using Artificial Intelligence, generate investigation reports, visualize incidents through an interactive dashboard, and communicate with an AI-powered security assistant.

The system follows a modular and scalable architecture that separates frontend, backend, database, and AI orchestration components to ensure maintainability and extensibility.

---

# 2. System Architecture

```

                                        +----------------+
                                        |     User       |
                                        +--------+-------+
                                                 |
                                                 |
                                                 ▼
                                  +-------------------------------+
                                  |       React Frontend          |
                                  |-------------------------------|
                                  | Dashboard                    |
                                  | Upload Logs                  |
                                  | Investigations               |
                                  | Reports                      |
                                  | AI Assistant                 |
                                  +---------------+--------------+
                                                  |
                                           REST API Calls
                                                  |
                                                  ▼
                               +---------------------------------------+
                               |          FastAPI Backend              |
                               |---------------------------------------|
                               | Authentication                        |
                               | File Upload                           |
                               | Log Processing                        |
                               | AI Orchestration                      |
                               | Report Generation                     |
                               | Database Services                     |
                               +---------------+-----------------------+
                                               |
                     +-------------------------+--------------------------+
                     |                                                    |
                     ▼                                                    ▼
      +-------------------------------+                 +--------------------------------+
      |        PostgreSQL             |                 |     AI Orchestration Layer      |
      |-------------------------------|                 |--------------------------------|
      | Users                         |                 | Log Parsing Agent              |
      | Uploaded Logs                 |                 | Threat Detection Agent         |
      | Investigations                |                 | Threat Intelligence Agent      |
      | Reports                       |                 | MITRE Mapping Agent            |
      | Chat History                  |                 | Risk Assessment Agent          |
      +-------------------------------+                 | Incident Report Agent          |
                                                        | Gemini LLM                    |
                                                        | LangChain                     |
                                                        | LangGraph                     |
                                                        | ChromaDB                      |
                                                        +--------------------------------+

```

---

# 3. Major Components

## 3.1 Frontend Layer

**Technology**

- React.js
- Material UI
- Recharts

**Responsibilities**

- User authentication
- Dashboard visualization
- Security log upload
- Investigation management
- AI chat interface
- Report viewing and download

---

## 3.2 Backend Layer

**Technology**

- FastAPI
- Python

**Responsibilities**

- User authentication
- File upload handling
- REST API implementation
- Log processing
- AI orchestration
- Database operations
- Report generation

---

## 3.3 Database Layer

**Technology**

- PostgreSQL

**Responsibilities**

Store application data including

- User information
- Uploaded log metadata
- Investigation records
- Threat analysis results
- Generated reports
- AI conversation history

---

## 3.4 AI Orchestration Layer

The AI Orchestration Layer coordinates multiple AI agents responsible for different stages of cybersecurity investigation.

### Log Parsing Agent

Responsibilities

- Read uploaded security logs
- Extract timestamps
- Extract usernames
- Extract IP addresses
- Identify event types

---

### Threat Detection Agent

Responsibilities

- Analyze parsed logs
- Detect suspicious activities
- Identify attack patterns
- Classify security incidents

---

### Threat Intelligence Agent

Responsibilities

- Provide contextual explanation
- Explain detected threats
- Generate threat summaries

---

### MITRE Mapping Agent

Responsibilities

- Map attacks to MITRE ATT&CK techniques
- Provide attack classification
- Support investigation workflow

---

### Risk Assessment Agent

Responsibilities

- Calculate risk score
- Classify severity
- Prioritize incidents

---

### Incident Report Agent

Responsibilities

- Generate executive summaries
- Generate investigation reports
- Produce remediation recommendations

---

# 4. System Workflow

```

User Login

↓

Dashboard

↓

Upload Security Log

↓

Backend receives uploaded file

↓

Log Parsing Agent

↓

Threat Detection Agent

↓

Threat Intelligence Agent

↓

MITRE Mapping Agent

↓

Risk Assessment Agent

↓

Incident Report Generation

↓

Store Results in Database

↓

Dashboard Updated

↓

User interacts with AI Assistant

```

---

# 5. AI Processing Workflow

```

Security Log

↓

Extract Structured Information

↓

Threat Analysis

↓

Threat Intelligence

↓

MITRE ATT&CK Mapping

↓

Risk Assessment

↓

Incident Report

↓

Natural Language Explanation

```

---

# 6. Project Folder Structure

```

SentinelAI

│

├── frontend

├── backend

├── database

├── docs

├── sample_logs

├── screenshots

├── README.md

└── LICENSE

```

---

# 7. Backend Folder Structure

```

backend

│

├── app

│   ├── api

│   ├── services

│   ├── agents

│   ├── models

│   ├── schemas

│   ├── database

│   ├── prompts

│   ├── utils

│   └── main.py

│

├── requirements.txt

└── README.md

```

---

# 8. Design Principles

SentinelAI follows the following software engineering principles:

- Modular Architecture
- Separation of Concerns
- Layered Design
- RESTful API Architecture
- Reusable Components
- Clean Code Practices
- Scalable Design
- Enterprise Software Standards

---

# 9. Technologies

## Frontend

- React.js
- Material UI
- Recharts

## Backend

- FastAPI
- Python

## Database

- PostgreSQL

## Artificial Intelligence

- Google Gemini
- LangChain
- LangGraph

## Vector Database

- ChromaDB

## Version Control

- Git
- GitHub

---

# 10. Future Enhancements

Future versions may include

- Live SIEM Integration
- Microsoft Sentinel Integration
- Splunk Integration
- Elastic Stack Integration
- Threat Intelligence APIs
- Real-Time Monitoring
- Email Notifications
- Role-Based Access Control
- Cloud Deployment
- Multi-Tenant Architecture
