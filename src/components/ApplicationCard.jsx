import React from 'react'
import { formatTime } from '../utils'

export default function ApplicationCard({ app }) {
  const statusClass = `status-${app.status}`
  const statusText = app.status.charAt(0).toUpperCase() + app.status.slice(1)

  return (
    <div className="app-card card-hover">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className={`status-dot ${statusClass}`}></div>
          <span className="text-sm font-medium text-gray-600">{statusText}</span>
        </div>
        <span className="text-xs text-gray-500 mono">{app.version}</span>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-2">{app.name}</h3>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Success Rate</span>
          <span className="text-sm font-medium text-gray-900">{app.successRate}%</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Total Cost</span>
          <span className="text-sm font-medium text-gray-900">${app.totalCost.toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Runtime (7d)</span>
          <span className="text-sm font-medium text-gray-900">{app.runtime7Days}h</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Last Run</span>
          <span className="text-sm font-medium text-gray-900 mono">{formatTime(app.lastRun)}</span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Health Score</span>
          <div className="flex items-center">
            <div className="w-16 h-2 bg-gray-200 rounded-full mr-2">
              <div className="h-2 bg-blue-600 rounded-full" style={{ width: `${app.healthScore}%` }}></div>
            </div>
            <span className="text-sm font-medium text-gray-900">{app.healthScore}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
