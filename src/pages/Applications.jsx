import React, { useState } from 'react'
import { applicationsData } from '../data.js'
import ApplicationsGrid from '../components/ApplicationsGrid.jsx'

export default function Applications() {
  const [filter, setFilter] = useState('all')
  const filters = [
    { key: 'all', label: 'All Applications' },
    { key: 'active', label: 'Active' },
    { key: 'warning', label: 'Warning' },
    { key: 'error', label: 'Error' },
    { key: 'high-cost', label: 'High Cost' },
    { key: 'low-success', label: 'Low Success Rate' },
  ]

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex flex-wrap items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Applications</h2>
            <div className="flex items-center space-x-4">
              <input type="text" placeholder="Search applications..." className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Search</button>
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
  )
}
