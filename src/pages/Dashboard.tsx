import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Users, 
  BarChart3, 
  Settings, 
  Bell, 
  Search, 
  Menu,
  X,
  TrendingUp,
  DollarSign,
  ShoppingCart,
  Eye,
  Activity,
  Calendar,
  Filter,
  Download,
  MoreVertical,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState('overview');
  const [notifications, setNotifications] = useState(3);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Sample data
  const stats = [
    { label: 'Total Revenue', value: '$45,231', change: '+12.5%', positive: true, icon: DollarSign },
    { label: 'Active Users', value: '2,341', change: '+5.2%', positive: true, icon: Users },
    { label: 'Orders', value: '1,234', change: '-2.1%', positive: false, icon: ShoppingCart },
    { label: 'Page Views', value: '12.4K', change: '+8.3%', positive: true, icon: Eye }
  ];

  const recentActivity = [
    { id: 1, user: 'John Doe', action: 'purchased Premium Plan', time: '2 minutes ago', avatar: 'JD' },
    { id: 2, user: 'Sarah Wilson', action: 'updated profile', time: '1 hour ago', avatar: 'SW' },
    { id: 3, user: 'Mike Johnson', action: 'created new project', time: '3 hours ago', avatar: 'MJ' },
    { id: 4, user: 'Emily Davis', action: 'uploaded documents', time: '5 hours ago', avatar: 'ED' }
  ];

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setNotifications(prev => prev > 0 ? prev - 1 : 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 ${isDarkMode ? 'dark' : ''} flex`}>
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-slate-800 shadow-xl transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:relative lg:flex-shrink-0`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-slate-200 dark:border-slate-700">
          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Dashboard
          </h1>
          <button 
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <nav className="mt-8 px-4 space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedTab(item.id)}
                className={`w-full flex items-center px-4 py-3 text-left rounded-xl transition-all duration-200 ${
                  selectedTab === item.id
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg transform scale-105'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:scale-105'
                }`}
              >
                <Icon className="mr-3 h-5 w-5" />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="bg-white dark:bg-slate-800 shadow-sm border-b border-slate-200 dark:border-slate-700 flex-shrink-0">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <Menu className="h-5 w-5" />
              </button>
              
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 w-64 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>
            </div>
            <div className='hidden md:block'>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>
              
              <button className="relative p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
                <Bell className="h-5 w-5" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                    {notifications}
                  </span>
                )}
              </button>
              
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-200">John Doe</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Administrator</p>
                </div>
                <div className="h-10 w-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                  JD
                </div>
              </div>
            </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6 space-y-6 overflow-auto">
          {/* Welcome Section */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">Welcome back, John! 👋</h2>
                <p className="text-purple-100">Here's what's happening with your business today.</p>
              </div>
              <div className="hidden md:block">
                <Activity className="h-16 w-16 text-purple-200" />
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${stat.positive ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'} group-hover:scale-110 transition-transform`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className={`flex items-center text-sm font-medium ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.positive ? <ArrowUpRight className="h-4 w-4 mr-1" /> : <ArrowDownRight className="h-4 w-4 mr-1" />}
                      {stat.change}
                    </div>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-1">{stat.value}</p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Chart Section */}
            <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">Revenue Overview</h3>
                <div className="flex items-center space-x-2">
                  <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
                    <Filter className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                  </button>
                  <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
                    <Download className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                  </button>
                </div>
              </div>
              
              <div className="h-64 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 text-slate-400 mx-auto mb-3" />
                  <p className="text-slate-500 dark:text-slate-400">Chart visualization would go here</p>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">Recent Activity</h3>
                <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
                  <MoreVertical className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                </button>
              </div>
              
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center space-x-3 p-3 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors">
                    <div className="h-8 w-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                      {activity.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-800 dark:text-slate-200 truncate">
                        {activity.user}
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-400 truncate">
                        {activity.action}
                      </p>
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {activity.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'New User', icon: Users, color: 'from-green-500 to-emerald-500' },
                { label: 'Generate Report', icon: BarChart3, color: 'from-blue-500 to-cyan-500' },
                { label: 'Schedule Meeting', icon: Calendar, color: 'from-purple-500 to-pink-500' },
                { label: 'System Settings', icon: Settings, color: 'from-orange-500 to-red-500' }
              ].map((action, index) => {
                const Icon = action.icon;
                return (
                  <button
                    key={index}
                    className="flex flex-col items-center p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200 hover:scale-105 group"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${action.color} text-white mb-2 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{action.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;