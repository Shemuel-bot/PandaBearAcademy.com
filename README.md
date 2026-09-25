# Panda Bear Academy

Panda Bear Academy is a full-stack learning platform in progress. The repository contains a React/Vite frontend and an Express/Prisma backend for users, courses, and lessons.

## Tech stack

- **Frontend:** React 19, Vite 8, React Router DOM 7, React Player
- **Backend:** Node.js, Express 5, Prisma ORM 8, PostgreSQL 15+
- **Code quality:** ESLint 10

## Requirements

- Node.js 20 or newer
- npm
- PostgreSQL 15 or newer for the backend

## Getting started

Install dependencies for each application in separate terminals:

```bash
cd Frontend
npm install
```

```bash
cd Backend
npm install
```

### Configure the backend

Create `Backend/.env` with a PostgreSQL connection string:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/pandabearacademy"
```

The database must be running before starting the backend.

### Start the applications

Start the frontend from `Frontend/`:

```bash
npm run dev
```

Start the backend from `Backend/`:

```bash
npm run dev
```

The frontend URL is printed by Vite. The backend listens on `http://localhost:3000`.

## Backend commands

Run these commands from `Backend/`:

```bash
npx run contract emit
```

Regenerates `src/prisma/contract.json` and `src/prisma/contract.d.ts` after changing `src/prisma/contract.prisma`.

## API endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/users` | Lists users with their IDs, email addresses, and names |
| `POST` | `/users` | Creates a user from the JSON request body |

## Frontend commands

Run these commands from `Frontend/`:

```bash
npm run build    # Create a production build
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```

## Project structure

```text
Backend/
	index.js                 Express server and API routes
	prisma.config.ts         Prisma configuration
	src/prisma/              Database client and data contract
Frontend/
	src/                     React components, modules, styles, and assets
	public/                  Static public assets
```

## Data model

The Prisma contract currently defines `User`, `Course`, and `Lesson` models. The contract is stored in `Backend/src/prisma/contract.prisma`; its generated companion files should be committed and updated with `npm run contract:emit`.

## License

ISC

