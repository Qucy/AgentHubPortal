// Agent Application Management Portal - Main JavaScript

// Mock data for applications
const applicationsData = [
    {
        id: 'app-001',
        name: 'Customer Support Agent',
        version: 'v2.3.1',
        status: 'active',
        lastRun: '2024-01-15T14:30:00Z',
        successRate: 96.8,
        totalCost: 2847.50,
        runtime7Days: 48.2,
        healthScore: 92,
        pillars: {
            taskExecution: 94,
            operationalEfficiency: 89,
            safetyAdherence: 97,
            reasoningExplainability: 91,
            consistencyStability: 88
        }
    },
    {
        id: 'app-002',
        name: 'Data Processing Agent',
        version: 'v1.8.2',
        status: 'warning',
        lastRun: '2024-01-15T13:45:00Z',
        successRate: 87.3,
        totalCost: 1923.75,
        runtime7Days: 72.5,
        healthScore: 78,
        pillars: {
            taskExecution: 85,
            operationalEfficiency: 92,
            safetyAdherence: 88,
            reasoningExplainability: 79,
            consistencyStability: 74
        }
    },
    {
        id: 'app-003',
        name: 'Content Generation Agent',
        version: 'v3.1.0',
        status: 'active',
        lastRun: '2024-01-15T15:12:00Z',
        successRate: 98.1,
        totalCost: 3456.20,
        runtime7Days: 36.8,
        healthScore: 95,
        pillars: {
            taskExecution: 97,
            operationalEfficiency: 94,
            safetyAdherence: 99,
            reasoningExplainability: 96,
            consistencyStability: 93
        }
    },
    {
        id: 'app-004',
        name: 'Analytics Agent',
        version: 'v2.0.4',
        status: 'error',
        lastRun: '2024-01-15T12:00:00Z',
        successRate: 72.4,
        totalCost: 1567.80,
        runtime7Days: 24.1,
        healthScore: 45,
        pillars: {
            taskExecution: 68,
            operationalEfficiency: 75,
            safetyAdherence: 82,
            reasoningExplainability: 71,
            consistencyStability: 58
        }
    },
    {
        id: 'app-005',
        name: 'Email Automation Agent',
        version: 'v1.5.3',
        status: 'active',
        lastRun: '2024-01-15T14:55:00Z',
        successRate: 93.7,
        totalCost: 892.45,
        runtime7Days: 28.3,
        healthScore: 89,
        pillars: {
            taskExecution: 91,
            operationalEfficiency: 88,
            safetyAdherence: 95,
            reasoningExplainability: 92,
            consistencyStability: 89
        }
    },
    {
        id: 'app-006',
        name: 'Image Processing Agent',
        version: 'v2.1.0',
        status: 'active',
        lastRun: '2024-01-15T13:20:00Z',
        successRate: 91.2,
        totalCost: 2103.60,
        runtime7Days: 52.7,
        healthScore: 86,
        pillars: {
            taskExecution: 89,
            operationalEfficiency: 93,
            safetyAdherence: 94,
            reasoningExplainability: 87,
            consistencyStability: 85
        }
    },
    {
        id: 'app-007',
        name: 'API Integration Agent',
        version: 'v1.9.1',
        status: 'warning',
        lastRun: '2024-01-15T11:30:00Z',
        successRate: 84.6,
        totalCost: 1234.90,
        runtime7Days: 41.8,
        healthScore: 71,
        pillars: {
            taskExecution: 82,
            operationalEfficiency: 87,
            safetyAdherence: 89,
            reasoningExplainability: 83,
            consistencyStability: 76
        }
    },
    {
        id: 'app-008',
        name: 'Report Generation Agent',
        version: 'v2.2.5',
        status: 'active',
        lastRun: '2024-01-15T15:00:00Z',
        successRate: 95.8,
        totalCost: 1678.35,
        runtime7Days: 19.4,
        healthScore: 91,
        pillars: {
            taskExecution: 94,
            operationalEfficiency: 96,
            safetyAdherence: 98,
            reasoningExplainability: 93,
            consistencyStability: 91
        }
    },
    {
        id: 'app-009',
        name: 'Quality Assurance Agent',
        version: 'v1.7.2',
        status: 'error',
        lastRun: '2024-01-15T10:15:00Z',
        successRate: 68.9,
        totalCost: 2341.75,
        runtime7Days: 63.2,
        healthScore: 52,
        pillars: {
            taskExecution: 65,
            operationalEfficiency: 71,
            safetyAdherence: 78,
            reasoningExplainability: 69,
            consistencyStability: 61
        }
    }
];

// Mock trace data
const traceData = {
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
                { id: 'step-4', name: 'Validate Output', status: 'success', duration: 0.2 }
            ]
        },
        {
            id: 'trace-001-002',
            timestamp: '2024-01-15T14:25:00Z',
            status: 'success',
            duration: 2.1,
            cost: 0.12,
            steps: [
                { id: 'step-1', name: 'Initialize Agent', status: 'success', duration: 0.2 },
                { id: 'step-2', name: 'Process Input', status: 'success', duration: 0.7 },
                { id: 'step-3', name: 'Generate Response', status: 'success', duration: 1.0 },
                { id: 'step-4', name: 'Validate Output', status: 'success', duration: 0.2 }
            ]
        }
    ]
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeParticles();
    initializeAnimations();
    initializeDashboardMetrics();
    renderApplications();
    initializeFilters();
    startRealTimeUpdates();
});

// Particle system for hero background
function initializeParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas || typeof window.PIXI === 'undefined') return;
    
    const app = new PIXI.Application({
        view: canvas,
        width: window.innerWidth,
        height: 400,
        transparent: true,
        antialias: true
    });

    const particles = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = new PIXI.Graphics();
        particle.beginFill(0x3182ce, 0.3);
        particle.drawCircle(0, 0, Math.random() * 3 + 1);
        particle.endFill();
        
        particle.x = Math.random() * app.screen.width;
        particle.y = Math.random() * app.screen.height;
        particle.vx = (Math.random() - 0.5) * 0.5;
        particle.vy = (Math.random() - 0.5) * 0.5;
        
        app.stage.addChild(particle);
        particles.push(particle);
    }

    app.ticker.add(() => {
        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            if (particle.x < 0) particle.x = app.screen.width;
            if (particle.x > app.screen.width) particle.x = 0;
            if (particle.y < 0) particle.y = app.screen.height;
            if (particle.y > app.screen.height) particle.y = 0;
        });
    });

    window.addEventListener('resize', () => {
        app.renderer.resize(window.innerWidth, 400);
    });
}

// Initialize animations
function initializeAnimations() {
    // Animate hero title
    if (typeof window.Splitting === 'function') {
        window.Splitting();
    }

    if (typeof window.anime === 'function') {
        window.anime({
            targets: '[data-splitting] .char',
            translateY: [100, 0],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 1400,
            delay: window.anime.stagger(30)
        });

        // Animate metric cards
        window.anime({
            targets: '.metric-card',
            translateY: [50, 0],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 1000,
            delay: window.anime.stagger(100, { start: 500 })
        });
    }
}

// Render application cards
function renderApplications(filter = 'all') {
    const grid = document.getElementById('applications-grid');
    if (!grid) return;

    let filteredApps = applicationsData;
    
    // Apply filters
    switch(filter) {
        case 'active':
            filteredApps = applicationsData.filter(app => app.status === 'active');
            break;
        case 'warning':
            filteredApps = applicationsData.filter(app => app.status === 'warning');
            break;
        case 'error':
            filteredApps = applicationsData.filter(app => app.status === 'error');
            break;
        case 'high-cost':
            filteredApps = applicationsData.filter(app => app.totalCost > 2000);
            break;
        case 'low-success':
            filteredApps = applicationsData.filter(app => app.successRate < 85);
            break;
    }

    grid.innerHTML = '';
    
    filteredApps.forEach((app, index) => {
        const card = createApplicationCard(app);
        grid.appendChild(card);
        
        // Animate card appearance
        anime({
            targets: card,
            translateY: [30, 0],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 600,
            delay: index * 50
        });
    });
}

// Create application card element
function createApplicationCard(app) {
    const card = document.createElement('div');
    card.className = 'app-card card-hover';
    card.onclick = () => navigateToApplication(app.id);
    
    const statusClass = `status-${app.status}`;
    const statusText = app.status.charAt(0).toUpperCase() + app.status.slice(1);
    
    card.innerHTML = `
        <div class="flex items-center justify-between mb-4">
            <div class="flex items-center">
                <div class="status-dot ${statusClass}"></div>
                <span class="text-sm font-medium text-gray-600">${statusText}</span>
            </div>
            <span class="text-xs text-gray-500 mono">${app.version}</span>
        </div>
        
        <h3 class="text-lg font-semibold text-gray-900 mb-2">${app.name}</h3>
        
        <div class="space-y-3">
            <div class="flex justify-between items-center">
                <span class="text-sm text-gray-600">Success Rate</span>
                <span class="text-sm font-medium text-gray-900">${app.successRate}%</span>
            </div>
            
            <div class="flex justify-between items-center">
                <span class="text-sm text-gray-600">Total Cost</span>
                <span class="text-sm font-medium text-gray-900">$${app.totalCost.toLocaleString()}</span>
            </div>
            
            <div class="flex justify-between items-center">
                <span class="text-sm text-gray-600">Runtime (7d)</span>
                <span class="text-sm font-medium text-gray-900">${app.runtime7Days}h</span>
            </div>
            
            <div class="flex justify-between items-center">
                <span class="text-sm text-gray-600">Last Run</span>
                <span class="text-sm font-medium text-gray-900 mono">${formatTime(app.lastRun)}</span>
            </div>
        </div>
        
        <div class="mt-4 pt-4 border-t border-gray-200">
            <div class="flex justify-between items-center">
                <span class="text-sm text-gray-600">Health Score</span>
                <div class="flex items-center">
                    <div class="w-16 h-2 bg-gray-200 rounded-full mr-2">
                        <div class="h-2 bg-blue-600 rounded-full" style="width: ${app.healthScore}%"></div>
                    </div>
                    <span class="text-sm font-medium text-gray-900">${app.healthScore}</span>
                </div>
            </div>
        </div>
    `;
    
    return card;
}

// Initialize filter functionality
function initializeFilters() {
    const filterChips = document.querySelectorAll('.filter-chip');
    
    filterChips.forEach(chip => {
        chip.addEventListener('click', function() {
            // Remove active class from all chips
            filterChips.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked chip
            this.classList.add('active');
            
            // Apply filter
            const filter = this.dataset.filter;
            renderApplications(filter);
        });
    });
}

// Navigation functions
function navigateToApplication(appId) {
    window.location.href = `index.html#/app/${appId}`;
}

function navigateToTrace(appId, traceId) {
    window.location.href = `index.html#/tracing`;
}

// Utility functions
function formatTime(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit'
    });
}

function formatDate(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Real-time updates simulation
function startRealTimeUpdates() {
    setInterval(() => {
        // Simulate real-time metric updates
        updateMetrics();
    }, 5000);
    
    setInterval(() => {
        // Simulate status changes
        updateApplicationStatuses();
    }, 15000);
}

function updateMetrics() {
    // Add some random variation to metrics
    const totalAgentsEl = document.getElementById('total-agents');
    const successRateEl = document.getElementById('success-rate');
    const totalCostEl = document.getElementById('total-cost');
    
    if (totalAgentsEl) {
        const currentValue = parseInt(totalAgentsEl.textContent);
        const variation = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
        totalAgentsEl.textContent = Math.max(0, currentValue + variation);
    }
    
    if (successRateEl) {
        const currentValue = parseFloat(successRateEl.textContent);
        const variation = (Math.random() - 0.5) * 0.2;
        const newValue = Math.max(0, Math.min(100, currentValue + variation));
        successRateEl.textContent = newValue.toFixed(1) + '%';
    }
    
    if (totalCostEl) {
        const currentValue = parseInt(totalCostEl.textContent.replace(/[$,]/g, ''));
        const variation = Math.floor(Math.random() * 100) - 50;
        const newValue = Math.max(0, currentValue + variation);
        totalCostEl.textContent = '$' + newValue.toLocaleString();
    }
}

function updateApplicationStatuses() {
    // Randomly update some application statuses
    applicationsData.forEach(app => {
        if (Math.random() < 0.1) { // 10% chance to update
            const statuses = ['active', 'warning', 'error'];
            const currentIndex = statuses.indexOf(app.status);
            const newStatus = statuses[Math.floor(Math.random() * statuses.length)];
            
            if (newStatus !== app.status) {
                app.status = newStatus;
                // Re-render applications if on main dashboard
                if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
                    renderApplications();
                }
            }
        }
    });
}

// Compute and render top-level dashboard metrics
function initializeDashboardMetrics() {
    const totalAgentsEl = document.getElementById('total-agents');
    const successRateEl = document.getElementById('success-rate');
    const totalCostEl = document.getElementById('total-cost');
    const needReviewEl = document.getElementById('need-review');

    if (!totalAgentsEl && !successRateEl && !totalCostEl && !needReviewEl) return;

    const activeCount = applicationsData.filter(a => a.status === 'active').length;
    const avgSuccess = applicationsData.reduce((sum, a) => sum + a.successRate, 0) / applicationsData.length;
    const sumCost = applicationsData.reduce((sum, a) => sum + a.totalCost, 0);
    const reviewCount = applicationsData.filter(isAppNeedsReview).length;

    if (totalAgentsEl) totalAgentsEl.textContent = activeCount;
    if (successRateEl) successRateEl.textContent = avgSuccess.toFixed(1) + '%';
    if (totalCostEl) totalCostEl.textContent = '$' + Math.round(sumCost).toLocaleString();
    if (needReviewEl) needReviewEl.textContent = reviewCount;
}

function isAppNeedsReview(app) {
    // Heuristic for prototype: requires review if currently error, or low health/success
    return app.status === 'error' || app.healthScore < 60 || app.successRate < 80;
}

// Export applications summary as CSV for risk review
function exportApplicationsReport() {
    const headers = [
        'id','name','version','status','successRate','totalCost','runtime7Days','healthScore','lastRun',
        'taskExecution','operationalEfficiency','safetyAdherence','reasoningExplainability','consistencyStability'
    ];

    const rows = applicationsData.map(a => [
        a.id,
        a.name,
        a.version,
        a.status,
        a.successRate,
        a.totalCost,
        a.runtime7Days,
        a.healthScore,
        a.lastRun,
        a.pillars.taskExecution,
        a.pillars.operationalEfficiency,
        a.pillars.safetyAdherence,
        a.pillars.reasoningExplainability,
        a.pillars.consistencyStability
    ]);

    const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'applications_report.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// Export functions for use in other pages
window.AgentPortal = {
    applicationsData,
    traceData,
    navigateToApplication,
    navigateToTrace,
    formatTime,
    formatDate,
    exportApplicationsReport
};