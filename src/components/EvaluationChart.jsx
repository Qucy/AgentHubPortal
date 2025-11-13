import React, { useEffect, useRef } from 'react'

export default function EvaluationChart() {
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current && window.echarts) {
      const chart = window.echarts.init(ref.current)
      chart.setOption({
        color: ['#ef4444', '#10b981', '#3b82f6'],
        tooltip: { trigger: 'axis' },
        grid: { left: 40, right: 20, top: 20, bottom: 30 },
        xAxis: { type: 'category', data: ['01/08/2025','01/09/2025','01/10/2025','01/11/2025'] },
        yAxis: { type: 'value', min: 0, max: 1 },
        series: [
          { name: 'Avg Policy Success Rate', type: 'line', data: [0.2,0.4,0.5,0.9] },
          { name: 'Avg Formatting Adherence', type: 'line', data: [0.1,0.5,0.4,0.6] },
          { name: 'Avg Semantic Correctness', type: 'line', data: [0.1,0.4,0.5,0.4] },
        ],
      })
      const handle = () => chart.resize()
      window.addEventListener('resize', handle)
      return () => {
        window.removeEventListener('resize', handle)
        chart.dispose()
      }
    }
  }, [])

  return <div ref={ref} style={{ height: 300 }} />
}
