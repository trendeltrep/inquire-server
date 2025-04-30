# Inquire server-side API (NestJS + PostgreSQL + TypeORM)

### Assumptions & Notes

- Built using **NestJS** and **TypeORM**, connected to a **PostgreSQL** database.
- The backend is deployed to **Railway** and exposes RESTful API endpoints under `/api`.
- Environment variables are used to configure database credentials and host.

### Optional Enhancements Implemented

- **Pagination support** with `page` and `limit` query parameters on the `/posts` endpoint.
- **Comment-to-post relationship** with retrieval of nested comments for a given post.
- **Error handling** for not found resources (e.g. 404 on missing post).
- **CORS** enabled for communication with deployed frontend.
- **Modular structure** with separation of concerns using NestJS modules and services.
- **Seed script** used during development to populate the database with sample data.
