import React, { useMemo } from 'react'
import ApplicationCard from './ApplicationCard.jsx'

export default function ApplicationsGrid({ applications, filter }) {
  const filteredApps = useMemo(() => {
    switch (filter) {
      case 'active':
        return applications.filter((a) => a.status === 'active')
      case 'warning':
        return applications.filter((a) => a.status === 'warning')
      case 'error':
        return applications.filter((a) => a.status === 'error')
      case 'high-cost':
        return applications.filter((a) => a.totalCost > 2000)
      case 'low-success':
        return applications.filter((a) => a.successRate < 85)
      default:
        return applications
    }
  }, [applications, filter])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredApps.map((app) => (
        <ApplicationCard key={app.id} app={app} />
      ))}
    </div>
  )
}
