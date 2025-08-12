import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Login from './components/Login'
import Layout from './components/Layout'
import Dashboard from './components/Dashboard'
import VirtualMachines from './components/VirtualMachines'
import Applications from './components/Applications'
import Billing from './components/Billing'
import Settings from './components/Settings'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogin = (userData) => {
    setIsAuthenticated(true)
    setUser(userData)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setUser(null)
  }

  return (
    <ThemeProvider>
      {!isAuthenticated ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Router>
          <Layout user={user} onLogout={handleLogout}>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/virtual-machines" element={<VirtualMachines />} />
              <Route path="/applications" element={<Applications />} />
              <Route path="/billing" element={<Billing />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/Go back" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </Layout>
        </Router>
      )}
    </ThemeProvider>
  )
}

export default App
