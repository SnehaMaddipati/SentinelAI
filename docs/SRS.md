# Software Requirements Specification (SRS)

# SentinelAI

## Autonomous Multi-Agent Security Operations Center (AI-SOC)

Version: 1.0

Status: Design Phase

Author: Sneha M

---

# 1. Introduction

## 1.1 Project Overview

SentinelAI is an AI-powered Security Operations Center (AI-SOC) designed to automate the initial stages of cybersecurity incident investigation using Artificial Intelligence, Large Language Models (LLMs), and autonomous AI agents.

The platform enables users to upload security logs collected from different operating systems and applications. Instead of manually reviewing thousands of log entries, SentinelAI automatically analyzes the logs, identifies suspicious activities, assigns a risk score, maps attack techniques, and generates AI-assisted investigation reports.

This project is intended as an R&D prototype demonstrating the application of AI in cybersecurity operations.

---

# 2. Problem Statement

Modern organizations generate massive volumes of security logs every day.

Security analysts spend significant time performing repetitive tasks such as:

- Reviewing log files
- Identifying suspicious activities
- Correlating security events
- Assessing incident severity
- Writing investigation reports

These tasks are time-consuming and require experienced cybersecurity professionals.

SentinelAI aims to automate the first level of investigation while allowing human analysts to make the final security decisions.

---

# 3. Objectives

The primary objectives of SentinelAI are:

- Automate security log analysis.
- Detect suspicious activities using AI.
- Assist cybersecurity analysts during investigations.
- Reduce manual effort in incident analysis.
- Demonstrate AI-powered cybersecurity workflows.
- Showcase enterprise-grade software architecture using modern technologies.

---

# 4. Scope

Version 1.0 focuses on AI-assisted security incident investigation.

The system will:

- Accept uploaded security logs.
- Parse log data.
- Detect suspicious activities.
- Provide AI-generated explanations.
- Generate investigation reports.
- Display investigation results through a dashboard.

The system will NOT:

- Monitor live systems.
- Perform penetration testing.
- Execute malware.
- Block attackers automatically.
- Connect with enterprise SIEM platforms.

---

# 5. Intended Users

## Security Analyst

Responsibilities

- Upload security logs
- Review investigations
- Chat with the AI assistant
- Download reports

---

## Administrator

Responsibilities

- Manage investigations
- View uploaded logs
- Access reports

---

# 6. Functional Requirements

The system shall provide the following features.

## FR-01 User Authentication

Users shall be able to securely log into the application.

---

## FR-02 Dashboard

The dashboard shall display:

- Total incidents
- Critical incidents
- Uploaded logs
- Investigation history
- Threat distribution
- Risk summary

---

## FR-03 Log Upload

Users shall be able to upload:

- Windows Event Logs
- Linux Authentication Logs
- Apache Logs
- Firewall Logs

Supported file types:

- .txt
- .log
- .csv
- .json

---

## FR-04 Log Parsing

The system shall extract:

- Timestamp
- Username
- IP Address
- Event ID
- Process Name
- Event Type

---

## FR-05 Threat Detection

The system shall identify suspicious activities such as:

- Brute Force
- Multiple Failed Logins
- Privilege Escalation
- Suspicious Commands
- Malware Indicators

---

## FR-06 AI Threat Analysis

The system shall use AI to:

- Explain threats
- Summarize incidents
- Assess severity
- Suggest possible mitigation

---

## FR-07 MITRE ATT&CK Mapping

The system shall map detected attacks to MITRE ATT&CK techniques.

---

## FR-08 Risk Assessment

Each investigation shall receive:

- Numerical Risk Score
- Severity Level

Severity levels:

- Low
- Medium
- High
- Critical

---

## FR-09 Incident Report Generation

The system shall generate reports containing:

- Executive Summary
- Timeline
- Findings
- Evidence
- Recommendations

Reports shall be downloadable as PDF.

---

## FR-10 AI Security Assistant

Users shall be able to ask questions such as:

- Explain this attack.
- Why is this suspicious?
- Suggest mitigation.
- Summarize this investigation.

---

# 7. Non-Functional Requirements

The application shall:

- Be modular.
- Follow REST architecture.
- Be responsive.
- Support scalable architecture.
- Use reusable components.
- Follow clean coding practices.

---

# 8. Technology Stack

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

## Other Tools

- Docker
- Git
- GitHub

---

# 9. Version 1.0 Deliverables

The MVP shall include:

- Login
- Dashboard
- Log Upload
- Log Parsing
- Threat Detection
- AI Investigation
- AI Chat
- Report Generation

---

# 10. Future Enhancements

Future versions may include:

- Real-time monitoring
- Splunk Integration
- Microsoft Sentinel Integration
- Elastic Stack
- Email Alerts
- Multi-user access
- Cloud Deployment
- Threat Intelligence APIs
- Real-time alerting

---

# 11. Success Criteria

The project will be considered successful if:

- Users can upload security logs.
- The system automatically analyzes uploaded logs.
- AI provides meaningful cybersecurity explanations.
- Investigation reports are generated.
- Dashboard visualizes investigation results.
- The architecture is modular, scalable, and maintainable.