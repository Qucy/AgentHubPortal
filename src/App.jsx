import React, { useMemo, useState } from 'react'
import { applicationsData } from './data.js'
import { isAppNeedsReview } from './utils.js'
import EvaluationChart from './components/EvaluationChart.jsx'
import ApplicationsGrid from './components/ApplicationsGrid.jsx'

export default function App() {
  const [filter, setFilter] = useState('all')

  const metrics = useMemo(() => {
    const activeCount = applicationsData.filter((a) => a.status === 'active').length
    const avgSuccess = applicationsData.reduce((sum, a) => sum + a.successRate, 0) / applicationsData.length
    const sumCost = applicationsData.reduce((sum, a) => sum + a.totalCost, 0)
    const reviewCount = applicationsData.filter(isAppNeedsReview).length
    return { activeCount, avgSuccess, sumCost: Math.round(sumCost), reviewCount }
  }, [])

  function exportApplicationsReport() {
    const headers = [
      'id','name','version','status','successRate','totalCost','runtime7Days','healthScore','lastRun',
      'taskExecution','operationalEfficiency','safetyAdherence','reasoningExplainability','consistencyStability',
    ]
    const rows = applicationsData.map((a) => [
      a.id, a.name, a.version, a.status, a.successRate, a.totalCost, a.runtime7Days, a.healthScore, a.lastRun,
      a.pillars.taskExecution, a.pillars.operationalEfficiency, a.pillars.safetyAdherence, a.pillars.reasoningExplainability, a.pillars.consistencyStability,
    ])
    const csv = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n')
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'applications_report.csv'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const filters = [
    { key: 'all', label: 'All Applications' },
    { key: 'active', label: 'Active' },
    { key: 'warning', label: 'Warning' },
    { key: 'error', label: 'Error' },
    { key: 'high-cost', label: 'High Cost' },
    { key: 'low-success', label: 'Low Success Rate' },
  ]

  return (
    <div className="ml-64">
      <aside className="fixed inset-y-0 left-0 w-64 bg-slate-900 border-r border-slate-800 shadow-sm z-50 text-slate-200">
        <div className="p-6 border-b border-slate-800">
          <h1 className="text-sm font-semibold">Agent Hub</h1>
        </div>
        <nav className="px-4 py-4 space-y-6">
          <div className="space-y-1">
            <a className="block px-3 py-2 rounded-md bg-slate-800 text-white font-medium">Dashboard</a>
            <a className="block px-3 py-2 rounded-md text-slate-200 hover:bg-slate-800">Home</a>
          </div>
          <div className="space-y-1">
            <p className="px-3 text-xs uppercase tracking-wide text-slate-400">Configuration</p>
            <a className="block px-3 py-2 rounded-md text-slate-200 hover:bg-slate-800">Applications</a>
            <a className="block px-3 py-2 rounded-md text-slate-200 hover:bg-slate-800">Agents</a>
          </div>
          <div className="space-y-1">
            <p className="px-3 text-xs uppercase tracking-wide text-slate-400">Observability</p>
            <a className="block px-3 py-2 rounded-md text-slate-200 hover:bg-slate-800">Tracing</a>
            <a className="block px-3 py-2 rounded-md text-slate-200 hover:bg-slate-800">Sessions</a>
            <a className="block px-3 py-2 rounded-md text-slate-200 hover:bg-slate-800">Users</a>
          </div>
          <div className="space-y-1">
            <p className="px-3 text-xs uppercase tracking-wide text-slate-400">Evaluation</p>
            <a className="block px-3 py-2 rounded-md text-slate-200 hover:bg-slate-800">LLM-as-a-Judge</a>
            <a className="block px-3 py-2 rounded-md text-slate-200 hover:bg-slate-800">Human Annotation</a>
            <a className="block px-3 py-2 rounded-md text-slate-200 hover:bg-slate-800">Datasets</a>
          </div>
        </nav>
        <div className="absolute bottom-4 left-6 flex items-center space-x-2 text-slate-400">
          <div className="status-dot status-active"></div>
          <span className="text-sm">Live</span>
        </div>
      </aside>

      <header className="sticky top-0 bg-white border-b border-gray-200 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-end">
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-gray-700">
              <span className="text-sm">Signed in as</span>
              <span className="font-medium">User</span>
            </div>
            <button className="px-3 py-1.5 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
              Log out
            </button>
          </div>
        </div>
      </header>

      <section className="py-12" id="applications-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Dashboard</h2>
              <button className="px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">Filters</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <p className="text-xs text-gray-500">Project</p>
                <p className="text-sm font-medium text-gray-900">WNP AI Project</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Active Agents</p>
                <p className="text-sm font-medium text-gray-900">{metrics.activeCount}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Avg Success</p>
                <p className="text-sm font-medium text-gray-900">{metrics.avgSuccess.toFixed(1)}%</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Need Review</p>
                <p className="text-sm font-medium text-gray-900">{metrics.reviewCount}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Evaluation</h3>
              <EvaluationChart />
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Operational Efficiency</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="text-gray-500">
                      <th className="text-left py-2">Metric</th>
                      <th className="text-right py-2">Value</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-900">
                    <tr>
                      <td className="py-2">Total Cost</td>
                      <td className="text-right">${metrics.sumCost.toLocaleString()}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex flex-wrap items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Applications</h2>
              <div className="flex items-center space-x-4">
                <input type="text" placeholder="Search applications..." className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Search</button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors" onClick={exportApplicationsReport}>
                  Export Report
                </button>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mb-6">
              {filters.map((f) => (
                <button
                  key={f.key}
                  className={`filter-chip ${filter === f.key ? 'active' : ''}`}
                  onClick={() => setFilter(f.key)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <ApplicationsGrid applications={applicationsData} filter={filter} />
        </div>
      </section>

      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 Agent Application Management Portal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
