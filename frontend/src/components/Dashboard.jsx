import React, { useState, useEffect } from 'react'
import { 
  Server, 
  Package, 
  DollarSign, 
  Activity, 
  TrendingUp,
  TrendingDown,
  AlertCircle,
  CheckCircle,
  Clock,
  Plus,
  Cpu,
  HardDrive,
  Zap
} from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'

// Mock data
const performanceData = [
  { time: '00:00', cpu: 45, memory: 67, network: 23 },
  { time: '04:00', cpu: 52, memory: 71, network: 28 },
  { time: '08:00', cpu: 68, memory: 82, network: 45 },
  { time: '12:00', cpu: 73, memory: 85, network: 52 },
  { time: '16:00', cpu: 65, memory: 78, network: 48 },
  { time: '20:00', cpu: 58, memory: 73, network: 35 },
  { time: '24:00', cpu: 48, memory: 69, network: 27 },

]

const costData = [
  { month: 'Jan', cost: 1200 },
  { month: 'Feb', cost: 1350 },
  { month: 'Mar', cost: 1180 },
  { month: 'Apr', cost: 1420 },
  { month: 'May', cost: 1680 },
  { month: 'Jun', cost: 1950 },
  { month: 'Jul', cost: 2100 },
  { month: 'Aug', cost: 2300 },
  { month: 'Sep', cost: 2200 },
  { month: 'Oct', cost: 2500 },
  { month: 'Nov', cost: 2400 },
  { month: 'Dec', cost: 2600 },
]

const StatCard = ({ title, value, change, icon: Icon, trend, color = 'blue' }) => {
  const colorClasses = {
    blue: 'bg-blue-600 text-blue-600',
    green: 'bg-green-600 text-green-600',
    yellow: 'bg-yellow-600 text-yellow-600',
    purple: 'bg-purple-600 text-purple-600',
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          {change && (
            <div className="flex items-center mt-2">
              {trend === 'up' ? (
                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
              )}
              <span className={`text-sm ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {change}
              </span>
              <span className="text-sm text-gray-500 ml-1">from last month</span>
            </div>
          )}
        </div>
        <div className={`p-3 rounded-lg ${colorClasses[color]?.replace('text-', 'bg-').replace('-600', '-100')}`}>
          <Icon className={`w-6 h-6 ${colorClasses[color]?.split(' ')[1]}`} />
        </div>
      </div>
    </div>
  )
}

const ActivityItem = ({ activity }) => {
  const icons = {
    success: CheckCircle,
    warning: AlertCircle,
    info: Activity,
  }

  const colors = {
    success: 'text-green-600',
    warning: 'text-yellow-600',
    info: 'text-blue-600',
  }

  const Icon = icons[activity.type]

  return (
    <div className="flex items-start space-x-3 py-3">
      <Icon className={`w-5 h-5 mt-0.5 ${colors[activity.type]}`} />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900">{activity.action}</p>
        <p className="text-sm text-gray-500">{activity.resource}</p>
      </div>
      <div className="flex items-center text-sm text-gray-500">
        <Clock className="w-4 h-4 mr-1" />
        {activity.time}
      </div>
    </div>
  )
}

const Dashboard = ({ user, onLogout }) => {
  const [stats, setStats] = useState({
    vms: 12,
    applications: 8,
    monthlySpend: 1950,
    activeResources: 18
  })

  return (
    <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">Welcome back, {user?.name}! Here's what's happening with your cloud infrastructure.</p>
          </div>
          <div className="flex space-x-3">
            <button 
              onClick={() => alert('Export Report clicked!')}
              className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Export Report
            </button>
            <button 
              onClick={() => alert('Create Resource clicked!')}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Resource
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Virtual Machines"
            value={stats.vms}
            change="+2"
            trend="up"
            icon={Server}
            color="blue"
          />
          <StatCard
            title="Applications"
            value={stats.applications}
            change="+1"
            trend="up"
            icon={Package}
            color="green"
          />
          <StatCard
            title="Monthly Spend"
            value={`$${stats.monthlySpend.toLocaleString()}`}
            change="+16%"
            trend="up"
            icon={DollarSign}
            color="yellow"
          />
          <StatCard
            title="Active Resources"
            value={stats.activeResources}
            change="+3"
            trend="up"
            icon={Activity}
            color="purple"
          />
        </div>

        {/* Performance Chart */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Resource Performance</h2>
            <div className="flex space-x-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">CPU</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Memory</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Network</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="cpu" stroke="#3B82F6" strokeWidth={2} />
              <Line type="monotone" dataKey="memory" stroke="#10B981" strokeWidth={2} />
              <Line type="monotone" dataKey="network" stroke="#8B5CF6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Cost Analysis and Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Cost Analysis */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Monthly Costs</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={costData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="cost" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Resource Overview */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Resource Overview</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <Cpu className="w-8 h-8 text-blue-600 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">CPU Usage</p>
                    <p className="text-sm text-gray-500">Across all instances</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900">68%</p>
                  <p className="text-sm text-green-600">+5% from yesterday</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <HardDrive className="w-8 h-8 text-green-600 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">Storage Used</p>
                    <p className="text-sm text-gray-500">Total across all volumes</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900">2.4TB</p>
                  <p className="text-sm text-blue-600">of 5TB available</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <Zap className="w-8 h-8 text-yellow-600 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">Auto-Scaling Events</p>
                    <p className="text-sm text-gray-500">Last 24 hours</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900">7</p>
                  <p className="text-sm text-green-600">All successful</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Dashboard
