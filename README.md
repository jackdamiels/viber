# Viber - NestJS Application

A modern NestJS application built with best practices, TypeScript, and modular architecture.

## Features

- **NestJS Framework** - Progressive Node.js framework for building efficient and scalable server-side applications
- **TypeScript** - Strongly typed programming language
- **Modular Architecture** - Well-organized code structure with separate modules
- **Validation** - Request validation using class-validator and class-transformer
- **Health Checks** - Built-in health check endpoints using @nestjs/terminus
- **Configuration Management** - Environment-based configuration using @nestjs/config
- **Error Handling** - Global exception filters for consistent error responses
- **API Versioning** - URI-based API versioning
- **CORS Enabled** - Cross-Origin Resource Sharing configured
- **Testing** - Jest testing framework configured

## Project Structure

```
viber/
├── src/
│   ├── common/              # Shared utilities, filters, guards, etc.
│   │   ├── decorators/
│   │   ├── filters/
│   │   │   └── http-exception.filter.ts
│   │   ├── guards/
│   │   ├── interceptors/
│   │   └── pipes/
│   ├── config/              # Configuration files
│   │   └── configuration.ts
│   ├── modules/             # Feature modules
│   │   ├── health/          # Health check module
│   │   │   ├── health.controller.ts
│   │   │   └── health.module.ts
│   │   └── users/           # Users module (CRUD example)
│   │       ├── dto/
│   │       │   ├── create-user.dto.ts
│   │       │   └── update-user.dto.ts
│   │       ├── entities/
│   │       │   └── user.entity.ts
│   │       ├── users.controller.ts
│   │       ├── users.module.ts
│   │       └── users.service.ts
│   ├── app.controller.ts    # Root controller
│   ├── app.module.ts        # Root module
│   ├── app.service.ts       # Root service
│   └── main.ts              # Application entry point
├── test/                    # E2E tests
├── .env.example            # Example environment variables
├── .eslintrc.js            # ESLint configuration
├── .prettierrc             # Prettier configuration
├── nest-cli.json           # NestJS CLI configuration
├── tsconfig.json           # TypeScript configuration
├── tsconfig.build.json     # TypeScript build configuration
└── package.json            # Dependencies and scripts
```

## Prerequisites

- Node.js >= 20.19.0
- npm >= 10.0.0

## Installation

```bash
# Install dependencies
npm install
```

## Configuration

1. Copy the example environment file:
```bash
cp .env.example .env
```

2. Update the `.env` file with your configuration:
```env
NODE_ENV=development
PORT=3000
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=postgres
DATABASE_NAME=viber
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=1d
```

## Running the Application

```bash
# Development mode with hot-reload
npm run start:dev

# Production mode
npm run build
npm run start:prod

# Debug mode
npm run start:debug
```

The application will be available at `http://localhost:3000`

## API Endpoints

### Root
- `GET /` - Welcome message

### Health
- `GET /api/v1/health` - Health check endpoint

### Users (Example CRUD)
- `POST /api/v1/users` - Create a new user
- `GET /api/v1/users` - Get all users
- `GET /api/v1/users/:id` - Get a user by ID
- `PUT /api/v1/users/:id` - Update a user
- `DELETE /api/v1/users/:id` - Delete a user

### Example Request

```bash
# Create a user
curl -X POST http://localhost:3000/api/v1/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }'

# Get all users
curl http://localhost:3000/api/v1/users
```

## Testing

```bash
# Unit tests
npm run test

# Watch mode
npm run test:watch

# Test coverage
npm run test:cov

# E2E tests
npm run test:e2e
```

## Code Quality

```bash
# Lint
npm run lint

# Format
npm run format
```

## Deployment

### Railway

This application is configured for deployment on Railway.

1. Push your code to GitHub
2. Connect your repository to Railway
3. Set environment variables in Railway dashboard
4. Deploy!

The application will automatically build and deploy using the configuration in `railway.json` and `Procfile`.

### Environment Variables for Production

Make sure to set these environment variables in your production environment:
- `NODE_ENV=production`
- `PORT` (Railway sets this automatically)
- Database credentials
- `JWT_SECRET` (use a strong, random secret)

## Best Practices Implemented

1. **Modular Structure** - Code organized into feature modules
2. **DTOs** - Data Transfer Objects for request validation
3. **Entities** - Domain models separated from DTOs
4. **Services** - Business logic separated from controllers
5. **Exception Filters** - Global error handling
6. **Validation** - Request validation using decorators
7. **Configuration** - Environment-based configuration
8. **Health Checks** - Application health monitoring
9. **API Versioning** - Versioned API endpoints
10. **TypeScript** - Full type safety

## Adding New Modules

Use NestJS CLI to generate new modules:

```bash
# Generate a new module
nest generate module modules/feature-name

# Generate a complete CRUD resource
nest generate resource modules/feature-name
```

## License

ISC
