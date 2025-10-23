# Viber - Full-Stack Application

A modern full-stack application with React + Vite frontend and Node.js + Express backend.

## Project Structure

```
viber/
├── backend/           # Node.js + Express backend
│   ├── src/
│   │   └── server.js  # Main server file
│   ├── package.json
│   └── .env.example
├── frontend/          # React + Vite frontend
│   ├── src/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── package.json       # Root workspace configuration
└── README.md
```

## Tech Stack

### Frontend
- **React 19** - Latest version of React
- **Vite 7** - Next generation frontend tooling
- **Modern ESLint** - Code quality and consistency

### Backend
- **Node.js** - JavaScript runtime
- **Express 4** - Web framework
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd viber
```

2. Install all dependencies (root, frontend, and backend)
```bash
npm run install:all
```

Alternatively, install manually:
```bash
# Install root dependencies
npm install

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### Environment Setup

Create a `.env` file in the `backend` directory:
```bash
cd backend
cp .env.example .env
```

Edit the `.env` file as needed (default PORT is 5000).

### Running the Application

#### Option 1: Run both frontend and backend together (recommended)
```bash
npm run dev
```

#### Option 2: Run separately

**Terminal 1 - Backend:**
```bash
npm run dev:backend
# or
cd backend && npm run dev
```

**Terminal 2 - Frontend:**
```bash
npm run dev:frontend
# or
cd frontend && npm run dev
```

### Accessing the Application

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000
- **Health Check:** http://localhost:5000/api/health

## Available Scripts

### Root Level
- `npm run install:all` - Install all dependencies
- `npm run dev` - Run both frontend and backend concurrently
- `npm run dev:backend` - Run only backend
- `npm run dev:frontend` - Run only frontend
- `npm run build:frontend` - Build frontend for production

### Backend
- `npm run dev` - Start development server with auto-reload
- `npm start` - Start production server

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## API Endpoints

### GET /api/health
Health check endpoint
```json
{
  "status": "ok",
  "message": "Server is running!"
}
```

### GET /api/hello
Demo endpoint
```json
{
  "message": "Hello from the backend!"
}
```

## Development

### Adding New Backend Routes
Edit `backend/src/server.js` and add your routes:
```javascript
app.get('/api/your-route', (req, res) => {
  res.json({ data: 'your data' });
});
```

### Adding New Frontend Components
Create components in `frontend/src/components/` and import them in `App.jsx`.

### Proxy Configuration
The frontend is configured to proxy `/api` requests to the backend (http://localhost:5000).
This is configured in `frontend/vite.config.js`.

## Building for Production

1. Build the frontend:
```bash
npm run build:frontend
```

2. The built files will be in `frontend/dist/`

3. You can serve the built files using the backend or any static file server.

## License

ISC
