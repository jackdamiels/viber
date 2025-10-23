# Railway Deployment Guide

This application is configured for easy deployment on Railway as a unified full-stack service.

## How It Works

The application uses a **single service deployment** where:
- The backend (Express) serves both API endpoints and the built frontend files
- During deployment, the frontend is built and the backend serves the static files
- All requests go through one service, eliminating CORS issues

## Deployment Steps

### 1. Initial Setup
1. Connect your GitHub repository to Railway
2. Railway will automatically detect the project and start deploying

### 2. Configuration
The deployment is configured with:
- **Build Command**: `npm run build` (builds the frontend)
- **Start Command**: `npm start` (starts the backend server which serves both API and frontend)

### 3. Environment Variables
No special environment variables are required for basic deployment. The server will automatically use Railway's `PORT` environment variable.

Optional environment variables you can set in Railway:
- `NODE_ENV=production` (automatically set by Railway)

### 4. How The Server Works

**In Production:**
- Backend serves API routes at `/api/*`
- Backend serves frontend static files for all other routes
- Single URL for the entire application

**File Structure:**
```
/home/user/viber/
├── backend/           # Express server
│   └── src/
│       └── server.js  # Serves API + static frontend
├── frontend/          # React + Vite app
│   ├── dist/         # Built files (created during deployment)
│   └── src/
├── railway.json      # Railway configuration
└── Procfile         # Alternative start command definition
```

## Troubleshooting

### 502 Bad Gateway Error
This error typically means the server isn't starting properly. Check:
1. Railway build logs to ensure the build completed successfully
2. Railway deploy logs to see if the server started
3. Ensure the PORT environment variable is being used (it is by default)

### Frontend Not Loading
- Verify the build command ran successfully in Railway logs
- Check that `frontend/dist` directory was created during build
- Ensure the backend is serving static files correctly

### API Not Working
- API routes are prefixed with `/api`
- Check Railway logs for any backend errors
- Ensure backend dependencies are installed

## Local Development

For local development, run frontend and backend separately:
```bash
# Terminal 1 - Backend
npm run dev:backend

# Terminal 2 - Frontend
npm run dev:frontend

# Or run both together
npm run dev
```

## Railway Service Settings

Recommended Railway settings:
- **Root Directory**: Leave as `/` (root)
- **Build Command**: Uses `npm run build` from railway.json
- **Start Command**: Uses `npm start` from railway.json
- **Restart Policy**: ON_FAILURE with max 10 retries

## Need Separate Services?

If you want to deploy frontend and backend as separate Railway services:
1. Create two services in Railway
2. Configure backend service with root directory `/backend`
3. Configure frontend service with root directory `/frontend`
4. Set environment variable in frontend with backend URL
5. Update frontend to use the backend URL instead of relative `/api` paths

However, the current unified approach is simpler and more cost-effective.
