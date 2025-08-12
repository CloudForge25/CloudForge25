import React, { useState } from 'react'
import { 
  User, 
  Shield, 
  Bell, 
  Globe, 
  Key, 
  Server, 
  Save, 
  Eye, 
  EyeOff, 
  TestTube, 
  CheckCircle, 
  XCircle, 
  RefreshCw
} from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext';

const Settings = ({ user, onLogout }) => {
  const { isDarkMode, toggleTheme } = useTheme()
  const [activeTab, setActiveTab] = useState('profile')
  const [apiSettings, setApiSettings] = useState({
    baseUrl: 'https://api.cloudforge.local',
    timeout: 30000,
    retries: 3,
    apiKey: '',
    enableLogging: true,
    environment: 'production'
  })
  const [showApiKey, setShowApiKey] = useState(false)
  const [testingConnection, setTestingConnection] = useState(false)
  const [connectionStatus, setConnectionStatus] = useState(null)
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    company: '',
    phone: '',
    timezone: 'UTC',
    language: 'en'
  })
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    vmAlerts: true,
    billingAlerts: true,
    securityAlerts: true,
    maintenanceAlerts: false
  })

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'api', name: 'API Configuration', icon: Server },
    { id: 'preferences', name: 'Preferences', icon: Globe }
  ]

  const handleApiTest = async () => {
    setTestingConnection(true)
    setConnectionStatus(null)
    
    // Simulate API test
    setTimeout(() => {
      const isValid = apiSettings.baseUrl && apiSettings.apiKey
      setConnectionStatus(isValid ? 'success' : 'error')
      setTestingConnection(false)
    }, 2000)
  }

  const handleSave = () => {
    // Here you would save the settings to your backend
    console.log('Saving settings:', {
      profile: profileData,
      notifications: notificationSettings,
      api: apiSettings
    })
    alert('Settings saved successfully!')
  }

  const ProfileTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            value={profileData.name}
            onChange={(e) => setProfileData({...profileData, name: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            value={profileData.email}
            onChange={(e) => setProfileData({...profileData, email: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company
          </label>
          <input
            type="text"
            value={profileData.company}
            onChange={(e) => setProfileData({...profileData, company: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Your company name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            value={profileData.phone}
            onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="+1 (555) 123-4567"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Timezone
          </label>
          <select
            value={profileData.timezone}
            onChange={(e) => setProfileData({...profileData, timezone: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="UTC">UTC</option>
            <option value="America/New_York">Eastern Time</option>
            <option value="America/Chicago">Central Time</option>
            <option value="America/Denver">Mountain Time</option>
            <option value="America/Los_Angeles">Pacific Time</option>
            <option value="Europe/London">London</option>
            <option value="Europe/Paris">Paris</option>
            <option value="Asia/Tokyo">Tokyo</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Language
          </label>
          <select
            value={profileData.language}
            onChange={(e) => setProfileData({...profileData, language: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
            <option value="ja">日本語</option>
          </select>
        </div>
      </div>
    </div>
  )

  const SecurityTab = () => (
    <div className="space-y-6">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-center">
          <Shield className="w-5 h-5 text-yellow-600 mr-2" />
          <h3 className="text-sm font-medium text-yellow-800">Security Settings</h3>
        </div>
        <p className="text-sm text-yellow-700 mt-2">
          Configure your account security settings and two-factor authentication.
        </p>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <div>
            <h4 className="font-medium text-gray-900">Two-Factor Authentication</h4>
            <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Enable 2FA
          </button>
        </div>
        
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <div>
            <h4 className="font-medium text-gray-900">Change Password</h4>
            <p className="text-sm text-gray-500">Update your account password</p>
          </div>
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
            Change Password
          </button>
        </div>
        
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <div>
            <h4 className="font-medium text-gray-900">API Keys</h4>
            <p className="text-sm text-gray-500">Manage your API access keys</p>
          </div>
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
            Manage Keys
          </button>
        </div>
      </div>
    </div>
  )

  const NotificationsTab = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        {Object.entries({
          emailNotifications: 'Email Notifications',
          smsNotifications: 'SMS Notifications', 
          pushNotifications: 'Push Notifications',
          vmAlerts: 'Virtual Machine Alerts',
          billingAlerts: 'Billing Alerts',
          securityAlerts: 'Security Alerts',
          maintenanceAlerts: 'Maintenance Alerts'
        }).map(([key, label]) => (
          <div key={key} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <h4 className="font-medium text-gray-900">{label}</h4>
              <p className="text-sm text-gray-500">
                {key === 'emailNotifications' && 'Receive notifications via email'}
                {key === 'smsNotifications' && 'Receive notifications via SMS'}
                {key === 'pushNotifications' && 'Receive browser push notifications'}
                {key === 'vmAlerts' && 'Get notified about VM status changes'}
                {key === 'billingAlerts' && 'Get notified about billing and usage'}
                {key === 'securityAlerts' && 'Get notified about security events'}
                {key === 'maintenanceAlerts' && 'Get notified about scheduled maintenance'}
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={notificationSettings[key]}
                onChange={(e) => setNotificationSettings({
                  ...notificationSettings,
                  [key]: e.target.checked
                })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        ))}
      </div>
    </div>
  )

  const ApiTab = () => (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-center">
          <Server className="w-5 h-5 text-blue-600 mr-2" />
          <h3 className="text-sm font-medium text-blue-800">Backend API Configuration</h3>
        </div>
        <p className="text-sm text-blue-700 mt-2">
          Configure the connection to your CloudForge backend API. Share these settings with your backend team.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            API Base URL
          </label>
          <input
            type="url"
            value={apiSettings.baseUrl}
            onChange={(e) => setApiSettings({...apiSettings, baseUrl: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="https://api.cloudforge.local"
          />
          <p className="text-xs text-gray-500 mt-1">
            The base URL for your CloudForge backend API
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            API Key
          </label>
          <div className="relative">
          <input
            type={showApiKey ? 'text' : 'password'}
            value={apiSettings.apiKey}
            onChange={(e) => {
              const newValue = e.target.value
              setApiSettings(prev => ({ ...prev, apiKey: newValue }))
            }}
            className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your API key"
          />
            <button
              type="button"
              onClick={() => setShowApiKey(!showApiKey)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showApiKey ? (
                <EyeOff className="w-4 h-4 text-gray-400" />
              ) : (
                <Eye className="w-4 h-4 text-gray-400" />
              )}
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Your backend team will provide this API key
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Request Timeout (ms)
            </label>
            <input
              type="number"
              value={apiSettings.timeout}
              onChange={(e) => setApiSettings({...apiSettings, timeout: parseInt(e.target.value)})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              min="1000"
              max="120000"
              step="1000"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Retry Attempts
            </label>
            <input
              type="number"
              value={apiSettings.retries}
              onChange={(e) => setApiSettings({...apiSettings, retries: parseInt(e.target.value)})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              min="0"
              max="10"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Environment
          </label>
          <select
            value={apiSettings.environment}
            onChange={(e) => setApiSettings({...apiSettings, environment: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="development">Development</option>
            <option value="staging">Staging</option>
            <option value="production">Production</option>
          </select>
        </div>

        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <div>
            <h4 className="font-medium text-gray-900">Enable API Logging</h4>
            <p className="text-sm text-gray-500">Log API requests and responses for debugging</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={apiSettings.enableLogging}
              onChange={(e) => setApiSettings({...apiSettings, enableLogging: e.target.checked})}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        {/* Test Connection */}
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-medium text-gray-900">Test API Connection</h4>
            <button
              onClick={handleApiTest}
              disabled={testingConnection}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center"
            >
              {testingConnection ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                  Testing...
                </>
              ) : (
                <>
                  <TestTube className="w-4 h-4 mr-2" />
                  Test Connection
                </>
              )}
            </button>
          </div>
          
          {connectionStatus && (
            <div className={`flex items-center p-3 rounded-lg ${connectionStatus === 'success' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
              {connectionStatus === 'success' ? (
                <>
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-green-800">Connection successful! API is reachable.</span>
                </>
              ) : (
                <>
                  <XCircle className="w-5 h-5 text-red-600 mr-2" />
                  <span className="text-red-800">Connection failed. Check your API URL and key.</span>
                </>
              )}
            </div>
          )}
        </div>

        {/* API Endpoints Reference */}
        <div className="border border-gray-200 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-3">API Endpoints Reference</h4>
          <div className="text-sm text-gray-600 space-y-2">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-gray-900">Virtual Machines:</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>GET /api/vms - List VMs</li>
                  <li>POST /api/vms - Create VM</li>
                  <li>PUT /api/vms/:id - Update VM</li>
                  <li>DELETE /api/vms/:id - Delete VM</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-gray-900">Applications:</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>GET /api/apps - List Apps</li>
                  <li>POST /api/apps - Deploy App</li>
                  <li>PUT /api/apps/:id - Update App</li>
                  <li>DELETE /api/apps/:id - Delete App</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const PreferencesTab = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <div>
            <h4 className="font-medium text-gray-900">Dark Mode</h4>
            <p className="text-sm text-gray-500">Switch between light and dark themes</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              checked={isDarkMode}
              onChange={toggleTheme}
              className="sr-only peer" 
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
        
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <div>
            <h4 className="font-medium text-gray-900">Auto-refresh Dashboard</h4>
            <p className="text-sm text-gray-500">Automatically refresh dashboard data every 30 seconds</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" defaultChecked className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
        
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <div>
            <h4 className="font-medium text-gray-900">Compact View</h4>
            <p className="text-sm text-gray-500">Show more information in less space</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
    </div>
  )

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileTab />
      case 'security':
        return <SecurityTab />
      case 'notifications':
        return <NotificationsTab />
      case 'api':
        return <ApiTab />
      case 'preferences':
        return <PreferencesTab />
      default:
        return <ProfileTab />
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600">Manage your account settings, preferences, and API configuration</p>
        </div>
        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Tabs */}
        <div className="lg:col-span-1">
          <nav className="space-y-1">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-3" />
                  {tab.name}
                </button>
              )
            })}
          </nav>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
