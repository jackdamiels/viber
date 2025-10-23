import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [backendMessage, setBackendMessage] = useState('Loading...')
  const [serverStatus, setServerStatus] = useState('Checking...')

  useEffect(() => {
    // Fetch health status
    fetch('/api/health')
      .then(res => res.json())
      .then(data => setServerStatus(data.message))
      .catch(err => setServerStatus('Backend not connected'));

    // Fetch hello message
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setBackendMessage(data.message))
      .catch(err => setBackendMessage('Failed to connect to backend'));
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Node.js</h1>
      <div className="card">
        <h2>Backend Connection Status</h2>
        <p>Server Status: <strong>{serverStatus}</strong></p>
        <p>Message from Backend: <strong>{backendMessage}</strong></p>
      </div>
      <p className="read-the-docs">
        Full-stack application with React (Vite) frontend and Node.js (Express) backend
      </p>
    </>
  )
}

export default App
