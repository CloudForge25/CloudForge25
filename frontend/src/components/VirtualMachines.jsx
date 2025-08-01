import React, { useState, useEffect } from 'react'
import { 
  Server, 
  Plus, 
  Play, 
  Square, 
  RotateCcw, 
  Trash2, 
  Cpu, 
  HardDrive, 
  Activity, 
  Clock,
  Monitor,
  Settings,
  Terminal,
  AlertCircle,
  CheckCircle,
  Pause,
  X
} from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

// Mock VM data
const initialVMs = []

// Mock performance data
const performanceData = [
  { time: '00:00', cpu: 45, memory: 67, network: 23 },
  { time: '04:00', cpu: 52, memory: 71, network: 28 },
  { time: '08:00', cpu: 68, memory: 82, network: 45 },
  { time: '12:00', cpu: 73, memory: 85, network: 52 },
  { time: '16:00', cpu: 65, memory: 78, network: 48 },
  { time: '20:00', cpu: 58, memory: 73, network: 35 },
  { time: '24:00', cpu: 48, memory: 69, network: 27 }
]

const VMCard = ({ vm, onAction, onMonitor }) => {
  const statusColors = {
    running: 'bg-green-100 text-green-800',
    stopped: 'bg-red-100 text-red-800',
    starting: 'bg-yellow-100 text-yellow-800',
    stopping: 'bg-orange-100 text-orange-800'
  }

  const statusIcons = {
    running: CheckCircle,
    stopped: AlertCircle,
    starting: Clock,
    stopping: Pause
  }

  const StatusIcon = statusIcons[vm.status]

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <div className="p-2 bg-blue-100 rounded-lg mr-3">
            <Server className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{vm.name}</h3>
            <p className="text-sm text-gray-500">{vm.os}</p>
          </div>
        </div>
        <div className="flex items-center">
          <StatusIcon className="w-4 h-4 mr-1" />
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[vm.status]}`}>
            {vm.status.charAt(0).toUpperCase() + vm.status.slice(1)}
          </span>
        </div>
      </div>

      {/* VM Specifications */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <Cpu className="w-5 h-5 text-blue-600 mx-auto mb-1" />
          <p className="text-sm font-medium text-gray-900">{vm.cpu} vCPU</p>
          <p className="text-xs text-gray-500">CPU Cores</p>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <Activity className="w-5 h-5 text-green-600 mx-auto mb-1" />
          <p className="text-sm font-medium text-gray-900">{vm.ram} GB</p>
          <p className="text-xs text-gray-500">Memory</p>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <HardDrive className="w-5 h-5 text-purple-600 mx-auto mb-1" />
          <p className="text-sm font-medium text-gray-900">{vm.disk} GB</p>
          <p className="text-xs text-gray-500">Storage</p>
        </div>
      </div>

      {/* VM Details */}
      <div className="space-y-2 mb-4 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">IP Address:</span>
          <span className="font-medium">{vm.ipAddress}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Uptime:</span>
          <span className="font-medium">{vm.uptime}</span>
        </div>
      </div>

      {/* Current Metrics */}
      {vm.status === 'running' && (
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Current Usage</span>
            <button
              onClick={() => onMonitor(vm)}
              className="text-xs text-blue-600 hover:text-blue-500 flex items-center"
            >
              <Monitor className="w-3 h-3 mr-1" />
              Monitor
            </button>
          </div>
          <div className="space-y-2">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>CPU</span>
                <span>{vm.currentMetrics.cpu}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full" 
                  style={{ width: `${vm.currentMetrics.cpu}%` }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>Memory</span>
                <span>{vm.currentMetrics.memory}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-600 h-2 rounded-full" 
                  style={{ width: `${vm.currentMetrics.memory}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex space-x-2">
        {vm.status === 'running' ? (
          <>
            <button
              onClick={() => onAction(vm.id, 'stop')}
              className="flex-1 bg-red-100 text-red-700 px-3 py-2 rounded-lg hover:bg-red-200 transition-colors flex items-center justify-center text-sm font-medium"
            >
              <Square className="w-4 h-4 mr-1" />
              Stop
            </button>
            <button
              onClick={() => onAction(vm.id, 'restart')}
              className="flex-1 bg-yellow-100 text-yellow-700 px-3 py-2 rounded-lg hover:bg-yellow-200 transition-colors flex items-center justify-center text-sm font-medium"
            >
              <RotateCcw className="w-4 h-4 mr-1" />
              Restart
            </button>
          </>
        ) : (
          <button
            onClick={() => onAction(vm.id, 'start')}
            className="flex-1 bg-green-100 text-green-700 px-3 py-2 rounded-lg hover:bg-green-200 transition-colors flex items-center justify-center text-sm font-medium"
          >
            <Play className="w-4 h-4 mr-1" />
            Start
          </button>
        )}
        <button
          onClick={() => onAction(vm.id, 'console')}
          className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center text-sm font-medium"
        >
          <Terminal className="w-4 h-4" />
        </button>
        <button
          onClick={() => onAction(vm.id, 'settings')}
          className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center text-sm font-medium"
        >
          <Settings className="w-4 h-4" />
        </button>
        <button
          onClick={() => onAction(vm.id, 'destroy')}
          className="bg-red-100 text-red-700 px-3 py-2 rounded-lg hover:bg-red-200 transition-colors flex items-center justify-center text-sm font-medium overflow-hidden"
          title="Destroy VM"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

const CreateVMModal = ({ isOpen, onClose, onCreateVM }) => {
  const [formData, setFormData] = useState({
    name: '',
    os: 'ubuntu-22.04',
    cpu: 2,
    ram: 4,
    disk: 50,
})

  const osOptions = [
    { value: 'ubuntu-22.04', label: 'Ubuntu 22.04 LTS' },
    { value: 'ubuntu-20.04', label: 'Ubuntu 20.04 LTS' },
    { value: 'centos-8', label: 'CentOS 8' },
    { value: 'windows-server-2022', label: 'Windows Server 2022' },
    { value: 'debian-11', label: 'Debian 11' }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    onCreateVM(formData)
    setFormData({ name: '', os: 'ubuntu-22.04', cpu: 2, ram: 4, disk: 50 })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Create New Virtual Machine</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                VM Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., web-server-01"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Operating System
              </label>
              <select
                value={formData.os}
                onChange={(e) => setFormData({...formData, os: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {osOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CPU Cores
                </label>
                <select
                  value={formData.cpu}
                  onChange={(e) => setFormData({...formData, cpu: parseInt(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {[1, 2, 4, 8, 16].map(cpu => (
                    <option key={cpu} value={cpu}>{cpu}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  RAM (GB)
                </label>
                <select
                  value={formData.ram}
                  onChange={(e) => setFormData({...formData, ram: parseInt(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {[2, 4, 8, 16, 32, 64].map(ram => (
                    <option key={ram} value={ram}>{ram}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Disk (GB)
                </label>
                <select
                  value={formData.disk}
                  onChange={(e) => setFormData({...formData, disk: parseInt(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {[20, 50, 100, 200, 500, 1000].map(disk => (
                    <option key={disk} value={disk}>{disk}</option>
                  ))}
                </select>
              </div>
            </div>


            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex justify-between text-sm">
                <span>Estimated monthly cost:</span>
                <span className="font-medium">${(formData.cpu * 10 + formData.ram * 5 + formData.disk * 0.1).toFixed(2)}</span>
              </div>
            </div>

            <div className="flex space-x-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Create VM
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

const MonitoringModal = ({ vm, isOpen, onClose }) => {
  if (!isOpen || !vm) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Monitoring: {vm.name}</h2>
            <button
              onClick={onClose}
              className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Close
            </button>
          </div>

          {/* Real-time metrics */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-700">CPU Usage</p>
                  <p className="text-2xl font-bold text-blue-900">{vm.currentMetrics.cpu}%</p>
                </div>
                <Cpu className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-700">Memory Usage</p>
                  <p className="text-2xl font-bold text-green-900">{vm.currentMetrics.memory}%</p>
                </div>
                <Activity className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-purple-700">Disk Usage</p>
                  <p className="text-2xl font-bold text-purple-900">{vm.currentMetrics.disk}%</p>
                </div>
                <HardDrive className="w-8 h-8 text-purple-600" />
              </div>
            </div>
          </div>

          {/* Performance chart */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Over Time (24h)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="cpu" stroke="#3B82F6" strokeWidth={2} name="CPU %" />
                <Line type="monotone" dataKey="memory" stroke="#10B981" strokeWidth={2} name="Memory %" />
                <Line type="monotone" dataKey="network" stroke="#8B5CF6" strokeWidth={2} name="Network MB/s" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

const VirtualMachines = ({ user, onLogout }) => {
  const [vms, setVMs] = useState(initialVMs)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [monitoringVM, setMonitoringVM] = useState(null)
  const [filter, setFilter] = useState('all')
  const [vmToDestroy, setVmToDestroy] = useState(null)

  const handleVMAction = (vmId, action) => {
    setVMs(prev => prev.map(vm => {
      if (vm.id === vmId) {
        switch (action) {
          case 'start':
            return { ...vm, status: 'starting' }
          case 'stop':
            return { ...vm, status: 'stopping' }
          case 'restart':
            return { ...vm, status: 'starting' }
          case 'console':
            alert('Console functionality is not yet implemented.')
            return vm
          case 'settings':
            alert('VM settings are not yet implemented.')
            return vm
case 'destroy':
            setVmToDestroy(vmId)
            return vm
          default:
            return vm
        }
      }
      return vm
    }))

    // Simulate state changes
    if (action === 'start' || action === 'restart') {
      setTimeout(() => {
        setVMs(prev => prev.map(vm => 
          vm.id === vmId ? { ...vm, status: 'running' } : vm
        ))
      }, 2000)
    } else if (action === 'stop') {
      setTimeout(() => {
        setVMs(prev => prev.map(vm => 
          vm.id === vmId ? { ...vm, status: 'stopped', currentMetrics: { cpu: 0, memory: 0, disk: vm.currentMetrics.disk } } : vm
        ))
      }, 2000)
    }
  }

useEffect(() => {
    if (vmToDestroy) {
      const confirmDestroy = window.confirm(
        'Are you sure you want to destroy this VM? This action is irreversible.'
      );
      if (confirmDestroy) {
        setVMs((prev) => prev.filter((vm) => vm.id !== vmToDestroy));
      }
      setVmToDestroy(null);
    }
  }, [vmToDestroy]);

  const handleCreateVM = (formData) => {
    const newVM = {
      id: `vm-${Date.now()}`,
      name: formData.name,
      status: 'starting',
      os: osOptions.find(os => os.value === formData.os)?.label || formData.os,
      cpu: formData.cpu,
      ram: formData.ram,
      disk: formData.disk,
      ipAddress: `192.168.1.${100 + vms.length + 1}`,
      uptime: 'Starting...',
      createdAt: new Date().toISOString().split('T')[0],
      currentMetrics: { cpu: 0, memory: 0, disk: 0 }
    }

    setVMs(prev => [...prev, newVM])

    // Simulate VM starting
    setTimeout(() => {
      setVMs(prev => prev.map(vm => 
        vm.id === newVM.id 
          ? { ...vm, status: 'running', uptime: '0 minutes', currentMetrics: { cpu: 15, memory: 25, disk: 10 } }
          : vm
      ))
    }, 3000)
  }

  const filteredVMs = vms.filter(vm => {
    if (filter === 'all') return true
    return vm.status === filter
  })

  const runningVMs = vms.filter(vm => vm.status === 'running').length
  const stoppedVMs = vms.filter(vm => vm.status === 'stopped').length

  return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Virtual Machines</h1>
            <p className="text-gray-600">Manage your virtual machine infrastructure</p>
          </div>
          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
          >
            <Plus className="w-4 h-4 mr-2" />
            Create VM
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <Server className="w-8 h-8 text-blue-600 mr-3" />
              <div>
                <p className="text-2xl font-bold text-gray-900">{vms.length}</p>
                <p className="text-sm text-gray-500">Total VMs</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
              <div>
                <p className="text-2xl font-bold text-gray-900">{runningVMs}</p>
                <p className="text-sm text-gray-500">Running</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <AlertCircle className="w-8 h-8 text-red-600 mr-3" />
              <div>
                <p className="text-2xl font-bold text-gray-900">{stoppedVMs}</p>
                <p className="text-sm text-gray-500">Stopped</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <Activity className="w-8 h-8 text-purple-600 mr-3" />
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {vms.reduce((sum, vm) => sum + vm.cpu, 0)}
                </p>
                <p className="text-sm text-gray-500">Total vCPUs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex space-x-2">
          {['all', 'running', 'stopped'].map(status => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === status
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>

        {/* VM Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredVMs.map(vm => (
            <VMCard
              key={vm.id}
              vm={vm}
              onAction={handleVMAction}
              onMonitor={setMonitoringVM}
            />
          ))}
        </div>

        {filteredVMs.length === 0 && (
          <div className="text-center py-12">
            <Server className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No virtual machines found</h3>
            <p className="text-gray-500 mb-4">
              {filter === 'all' ? 'Create your first VM to get started' : `No ${filter} VMs found`}
            </p>
            {filter === 'all' && (
              <button
                onClick={() => setShowCreateModal(true)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Create Your First VM
              </button>
            )}
          </div>
        )}

        {/* Modals */}
        <CreateVMModal
          isOpen={showCreateModal}
          onClose={() => setShowCreateModal(false)}
          onCreateVM={handleCreateVM}
        />

        <MonitoringModal
          vm={monitoringVM}
          isOpen={!!monitoringVM}
          onClose={() => setMonitoringVM(null)}
        />
      </div>
  )
}

const osOptions = [
  { value: 'ubuntu-22.04', label: 'Ubuntu 22.04 LTS' },
  { value: 'ubuntu-20.04', label: 'Ubuntu 20.04 LTS' },
  { value: 'centos-8', label: 'CentOS 8' },
  { value: 'windows-server-2022', label: 'Windows Server 2022' },
  { value: 'debian-11', label: 'Debian 11' }
]

export default VirtualMachines
