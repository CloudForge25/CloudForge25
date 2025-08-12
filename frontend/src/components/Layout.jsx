import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { 
  Cloud, 
  LayoutDashboard, 
  Server, 
  Package, 
  CreditCard, 
  Settings, 
  LogOut, 
  User,
  Bell,
  Search
} from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const Layout = ({ children, user, onLogout }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const { isDarkMode } = useTheme()

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Virtual Machines', href: '/virtual-machines', icon: Server },
    { name: 'Applications', href: '/applications', icon: Package },
    { name: 'Billing', href: '/billing', icon: CreditCard },
    { name: 'Settings', href: '/settings', icon: Settings },
  ]

  const isActivePage = (href) => location.pathname === href

return (
    <div className={`flex h-screen ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      {/* Sidebar */}
      <div className={`flex flex-col w-64 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg`}>
        {/* Logo */}
        <div className={`flex items-center px-6 py-4 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="p-2 bg-blue-600 rounded-lg">
            <Cloud className="w-6 h-6 text-white" />
          </div>
          <h1 className={`ml-3 text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>CloudForge</h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.name}
                onClick={() => navigate(item.href)}
                className={`
                  w-full flex items-center px-4 py-3 text-left rounded-lg transition-all
                  ${isActivePage(item.href)
                    ? isDarkMode 
                      ? 'bg-blue-900 text-blue-300 border-r-2 border-blue-500'
                      : 'bg-blue-50 text-blue-700 border-r-2 border-blue-600'
                    : isDarkMode
                      ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }
                `}
              >
                <Icon className="w-5 h-5 mr-3" />
                <span className="font-medium">{item.name}</span>
              </button>
            )
          })}
        </nav>

        {/* User Profile */}
        <div className={`px-4 py-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex items-center">
            <div className={`p-2 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-full`}>
              <User className={`w-5 h-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
            </div>
            <div className="ml-3 flex-1">
              <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{user?.name}</p>
              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{user?.email}</p>
            </div>
            <button
              onClick={onLogout}
              className={`p-2 ${isDarkMode ? 'text-gray-400 hover:text-red-400' : 'text-gray-400 hover:text-red-600'} transition-colors`}
              title="Sign out"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center flex-1">
              <div className="relative w-64">
                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-gray-400' : 'text-gray-400'} w-4 h-4`} />
                <input
                  type="text"
                  placeholder="Search resources..."
                  className={`w-full pl-10 pr-4 py-2 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400' : 'border-gray-300 bg-white text-gray-900'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button 
                onClick={() => alert('No new notifications')}
                className={`p-2 ${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'} transition-colors relative`}
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{user?.name}</p>
                  <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Online</p>
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">
                    {user?.name?.charAt(0).toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className={`flex-1 overflow-y-auto p-6 ${isDarkMode ? 'bg-gray-800' : ''}`}>
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout
