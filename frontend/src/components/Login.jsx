import React, { useState } from 'react'
import { Cloud, Shield, Zap } from 'lucide-react'

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      const userData = {
        userId: '1',
        email: credentials.email,
        name: credentials.email.split('@')[0],
        isActive: true,
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString()
      }
      onLogin(userData)
      setIsLoading(false)
    }, 1000)
  }

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Branding */}
          <div className="text-white space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/10 rounded-lg backdrop-blur">
                <Cloud className="w-8 h-8 text-blue-300" />
              </div>
              <h1 className="text-4xl font-bold">CloudForge</h1>
            </div>
            
            <h2 className="text-2xl font-semibold text-blue-100">
              Unified Cloud Infrastructure Solution
            </h2>
            
            <p className="text-lg text-blue-200 leading-relaxed">
              Deploy virtual machines, containerized applications, and manage your entire cloud infrastructure from one powerful platform.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-blue-300" />
                <span className="text-blue-100">Enterprise-grade security</span>
              </div>
              <div className="flex items-center space-x-3">
                <Zap className="w-5 h-5 text-blue-300" />
                <span className="text-blue-100">Auto-scaling and optimization</span>
              </div>
              <div className="flex items-center space-x-3">
                <Cloud className="w-5 h-5 text-blue-300" />
                <span className="text-blue-100">Both IaaS and PaaS solutions</span>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Welcome back</h3>
              <p className="text-gray-600">Sign in to your CloudForge account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={credentials.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={credentials.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span className="ml-2">Signing in...</span>
                  </div>
                ) : (
                  'Sign in'
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <a href="#" className="text-blue-600 hover:text-blue-500 font-medium">
                  Sign up for free
                </a>
              </p>
            </div>

            {/* Demo Credentials */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
              <p className="text-sm text-gray-700 font-medium mb-1">Demo Credentials:</p>
              <p className="text-xs text-gray-600">Email: demo@cloudforge.com</p>
              <p className="text-xs text-gray-600">Password: Any password works for demo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
