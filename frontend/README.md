# SentinelAI Frontend

## Overview

The SentinelAI Frontend is built using **React**, **TypeScript**, and **Material UI**. It provides an interactive user interface for the Autonomous Multi-Agent Security Operations Center (AI-SOC), enabling users to upload security logs, monitor investigations, interact with AI-powered analysis, and visualize cybersecurity insights.

The frontend follows a modular and component-based architecture to ensure scalability, maintainability, and reusability.

---

## Frontend Architecture Philosophy

The frontend follows a feature-oriented and component-based architecture. Pages are composed of reusable UI components, while business logic is isolated into service layers responsible for communicating with the backend APIs. This separation improves maintainability and simplifies future enhancements.

---

## Technology Stack

### Current

- React
- TypeScript
- Vite
- Material UI
- React Router
- Axios

---

## Responsibilities

The frontend is responsible for:

- User Authentication
- Dashboard Visualization
- Security Log Upload
- Investigation Management
- AI Chat Interface
- Report Viewing
- REST API Communication
- Responsive User Experience

---

## Planned Project Structure

```
frontend/
│
├── public/
│
├── src/
│   ├── api/
│   ├── assets/
│   ├── components/
│   ├── config/
│   ├── hooks/
│   ├── layouts/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   ├── styles/
│   ├── types/
│   ├── utils/
│   ├── App.tsx
│   └── main.tsx
│
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Development Status

🚧 Active Development (MVP Phase)

Current focus

- Frontend Initialization
- Project Structure
- Routing
- Layout Development
- Backend Integration

---

## Running the Application

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Application URL

```
http://localhost:5173
```

---

## Future Enhancements

- Dark Security Dashboard
- Interactive Charts
- Drag & Drop Log Upload
- AI Chat Interface
- Responsive Design
- Theme Customization