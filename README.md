# Panda Bear Academy

Panda Bear Academy is a full-stack learning platform for accessible education. The project includes a React + Vite frontend and an Express + Prisma backend for course content, user accounts, and enrollment tracking.

## Overview

This repository is structured as a monorepo with two main apps:

- Frontend: a React interface for navigation, course browsing, sign-in, and sign-up flows
- Backend: an Express API that connects to PostgreSQL through Prisma and handles user registration and authentication logic

## Tech stack

- Frontend: React 19, Vite 8, React Router DOM 7, React Player
- Backend: Node.js, Express 5, Prisma ORM 8, PostgreSQL 15+
- Auth: bcryptjs and JWT-ready patterns for password hashing and secure session tokens
- Tooling: ESLint, Nodemon

## Requirements

- Node.js 20 or newer
- npm
- PostgreSQL 15 or newer
- A `.env` file for backend environment variables

## Project structure

```text
PandaBearAcademy.com/
├── Backend/
│   ├── controllers/
│   ├── src/
│   ├── index.js
│   ├── package.json
│   ├── prisma.config.ts
│   └── .env
├── Frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
├── README.md
└── .gitignore
```

## Local setup

### 1) Install dependencies

Open two terminals and run:

```bash
cd Frontend
npm install
```

```bash
cd Backend
npm install
```

### 2) Set up environment variables

Create a `Backend/.env` file using `Backend/.env.example` as a template. Set the database
connection string and credentials for JWT signing, sessions, and Google OAuth:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/pandabearacademy"
JWT_SECRET="replace-this-with-a-long-random-secret"
SESSION_SECRET="replace-this-with-a-long-random-secret"
GOOGLE_CLIENT_ID="your-google-oauth-client-id"
GOOGLE_CLIENT_SECRET="your-google-oauth-client-secret"
GOOGLE_CALLBACK_URL="http://localhost:3000/auth/google/callback"
CLIENT_URL="http://localhost:5173"
```

In Google Cloud Console, add the exact value of `GOOGLE_CALLBACK_URL` to the OAuth
client's **Authorized redirect URIs**. For deployment, set it to the backend's public
HTTPS URL followed by `/auth/google/callback`, and use that same URL in Google Cloud
Console. Set the frontend's `VITE_AUTH_API_URL` to the backend's public origin and
`CLIENT_URL` to the frontend's public origin; the development API fallback is
configured in `Frontend/src/auth.js`. In GitHub Codespaces, make the forwarded
backend port (3000) public so the browser can reach the API; restart the frontend
after changing its Vite environment variables.

### 3) Start the apps

Frontend:

```bash
cd Frontend
npm run dev
```

Backend:

```bash
cd Backend
npm run dev
```

The frontend runs through Vite, usually at a localhost URL shown in the terminal. The backend currently listens on:

```text
http://localhost:3000
```

## Backend notes

The backend currently exposes user-related routes from `Backend/index.js`, including:

- `GET /users/v1`
- `POST /users/v1`
- `POST /users/v1/login`
- Google OAuth at `/auth/google`

Email login returns a JWT in JSON. Google sign-in sets a one-day JWT in an HttpOnly
`token` cookie before redirecting to the frontend `/home` page. The Google OAuth client
must allow `http://localhost:3000/auth/google/callback` as its local callback URL.

The Prisma schema defines the main app entities, including `User`, `Course`, `Enrollment`, `Lesson`, and `Problems` in:

```text
Backend/src/prisma/contract.prisma
```

## Data model highlights

- `User` stores the account identity and authentication data
- `Course` stores course metadata
- `Enrollment` links users to courses and tracks progress
- `Lesson` stores lesson information and associations to course content

## Frontend workflow

The frontend uses React Router and module-based styling. The app is organized around pages such as:

- landing page
- sign in
- sign up
- courses
- profile
- user home

## Useful commands

From the frontend:

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

From the backend:

```bash
npm run dev
npx prisma generate
```

If the Prisma schema changes, regenerate the contract artifacts as needed.

## Status

This project is actively under construction. The frontend and backend are set up, but authentication, enrollment logic, and additional lessons/course APIs are still being completed.

## License

ISC
