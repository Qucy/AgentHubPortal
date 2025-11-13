export const applicationsData = [
  {
    id: 'app-001',
    name: 'Customer Support Agent',
    version: 'v2.3.1',
    status: 'active',
    lastRun: '2024-01-15T14:30:00Z',
    successRate: 96.8,
    totalCost: 2847.5,
    runtime7Days: 48.2,
    healthScore: 92,
    pillars: {
      taskExecution: 94,
      operationalEfficiency: 89,
      safetyAdherence: 97,
      reasoningExplainability: 91,
      consistencyStability: 88,
    },
  },
  {
    id: 'app-004',
    name: 'Analytics Agent',
    version: 'v2.0.4',
    status: 'error',
    lastRun: '2024-01-15T12:00:00Z',
    successRate: 72.4,
    totalCost: 1567.8,
    runtime7Days: 24.1,
    healthScore: 45,
    pillars: {
      taskExecution: 68,
      operationalEfficiency: 75,
      safetyAdherence: 82,
      reasoningExplainability: 71,
      consistencyStability: 58,
    },
  },
  {
    id: 'app-006',
    name: 'Image Processing Agent',
    version: 'v2.1.0',
    status: 'active',
    lastRun: '2024-01-15T13:20:00Z',
    successRate: 91.2,
    totalCost: 2103.6,
    runtime7Days: 52.7,
    healthScore: 86,
    pillars: {
      taskExecution: 89,
      operationalEfficiency: 93,
      safetyAdherence: 94,
      reasoningExplainability: 87,
      consistencyStability: 85,
    },
  },
]

export const traceData = {
  'app-001': [
    {
      id: 'trace-001-001',
      timestamp: '2024-01-15T14:30:00Z',
      status: 'success',
      duration: 2.4,
      cost: 0.15,
      steps: [
        { id: 'step-1', name: 'Initialize Agent', status: 'success', duration: 0.2 },
        { id: 'step-2', name: 'Process Input', status: 'success', duration: 0.8 },
        { id: 'step-3', name: 'Generate Response', status: 'success', duration: 1.2 },
        { id: 'step-4', name: 'Validate Output', status: 'success', duration: 0.2 },
      ],
    },
  ],
}
