import React from 'react'
import EvaluationChart from '../components/EvaluationChart.jsx'

export default function Evaluation() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Evaluation</h2>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <EvaluationChart />
        </div>
      </div>
    </section>
  )
}
