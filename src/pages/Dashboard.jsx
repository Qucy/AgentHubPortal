import React, { useMemo } from 'react'
import { applicationsData } from '../data.js'
import { isAppNeedsReview } from '../utils.js'
import EvaluationChart from '../components/EvaluationChart.jsx'

export default function Dashboard() {
  const metrics = useMemo(() => {
    const activeCount = applicationsData.filter((a) => a.status === 'active').length
    const avgSuccess = applicationsData.reduce((sum, a) => sum + a.successRate, 0) / applicationsData.length
    const sumCost = applicationsData.reduce((sum, a) => sum + a.totalCost, 0)
    const reviewCount = applicationsData.filter(isAppNeedsReview).length
    return { activeCount, avgSuccess, sumCost: Math.round(sumCost), reviewCount }
  }, [])

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-8">
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
      </div>
    </section>
  )
}
