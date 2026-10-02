# Blog Platform on Cloudflare Workers

A Medium-style blogging app. Users sign up, sign in, publish posts, and read posts from other authors. The API runs on Cloudflare Workers, and the client is a React single-page app.

I built it as a learning project, mainly to understand how a serverless edge runtime changes the way you connect to a relational database.

<!-- Add a screenshot of the blog feed here. -->

## Architecture

```
frontend/   React + TypeScript (Vite, Tailwind)
    │  Axios, JWT in the Authorization header
    ▼
backend/    Hono on Cloudflare Workers
    │  Prisma Client (edge) + Accelerate connection pool
    ▼
PostgreSQL

common/     zod schemas and inferred types, published to npm as
            @ajayvish/medium-common and imported by both sides
```

Three things here are worth a look:

- **Database access from Workers.** Workers cannot hold long-lived TCP connections, so the API uses Prisma's edge client and routes queries through Prisma Accelerate, which pools connections to Postgres.
- **Shared validation.** Request schemas live in `common/` and are published as an npm package. The backend validates request bodies with them, and the frontend imports the inferred TypeScript types, so the two cannot drift apart.
- **Auth middleware.** Every `/api/v1/blog/*` route goes through a Hono middleware that verifies the JWT and puts the user id on the request context.

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | React, TypeScript, Vite, Tailwind CSS, React Router, Axios |
| Backend | Hono, Cloudflare Workers, Wrangler |
| Data | PostgreSQL, Prisma, Prisma Accelerate |
| Shared | zod |

## API

| Method | Route | Auth | Description |
|---|---|---|---|
| `POST` | `/api/v1/user/signup` | No | Create an account, returns a JWT |
| `POST` | `/api/v1/user/signin` | No | Sign in, returns a JWT |
| `POST` | `/api/v1/blog` | Yes | Create a post |
| `PUT` | `/api/v1/blog` | Yes | Update one of your posts |
| `GET` | `/api/v1/blog/bulk` | Yes | List all posts with author names |
| `GET` | `/api/v1/blog/:id` | Yes | Get a single post |

## Running locally

### Backend

```bash
cd backend
npm install
```

Set the connection strings. `DATABASE_URL` in `wrangler.toml` should be the Prisma Accelerate URL. Use a direct Postgres URL in `backend/.env` for migrations.

```toml
# wrangler.toml
[vars]
DATABASE_URL = "prisma://accelerate.prisma-data.net/?api_key=..."
SECRET_KEY = "a-long-random-string"
```

```bash
npx prisma migrate dev
npx prisma generate --no-engine
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The API base URL is in `frontend/src/config.ts`.

### Deploy

```bash
cd backend
npm run deploy
```

## Project structure

```
backend/
├── src/index.ts           # App, CORS, route mounting
├── src/routes/user.ts     # Signup and signin
├── src/routes/blog.ts     # Auth middleware and post routes
└── prisma/schema.prisma   # User and Post models
common/
└── src/index.ts           # zod schemas and exported types
frontend/
└── src/
    ├── pages/             # Signup, Signin, Blogs, Blog, Publish
    ├── components/
    └── hooks/index.ts     # useBlog and useBlogs data hooks
```

## Known gaps

- Passwords are stored as plain text and sign-in does not compare the password. Hashing and verification need to be added before this is used for anything real.
- Posts have no pagination, delete, or draft state.
- The JWT is kept in `localStorage` and never expires.
