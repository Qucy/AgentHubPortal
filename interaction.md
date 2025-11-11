# Agent Application Management Portal - Interaction Design

## User Flow Overview
The portal provides a multi-level navigation experience with three main dashboard levels and an evaluation system.

## Level 1: Main Dashboard
**Primary Interface**: Application overview with statistical metrics
- **Top Section**: Key performance indicators
  - Total active agents (live counter)
  - Average success rate (percentage with trend indicator)
  - Total cost in USD (formatted currency)
  - Applications needing review (alert badge with count)
- **Filter Section**: Interactive filters for data refinement
  - Date range picker (last 7 days, 30 days, custom)
  - Application status filter (active, inactive, error)
  - Cost range slider
  - Success rate threshold slider
- **Application Cards Grid**: Display of all applications
  - Each card shows: app name, version, status, last run time, success rate, cost
  - Clickable cards that navigate to Level 2 dashboard
  - Real-time status indicators (green/yellow/red dots)

## Level 2: Application Dashboard
**Detailed View**: Individual application performance metrics
- **Header Section**: Application基本信息
  - Application name and version
  - Last runtime timestamp
  - Total runtime (last 7 days)
  - Total cost breakdown
  - Status indicator and health score
- **Performance Metrics**: Five pillar assessment
  - Task Execution Quality (score + progress bar)
  - Operational Efficiency (score + progress bar)
  - Safety & Adherence (score + progress bar)
  - Reasoning & Explainability (score + progress bar)
  - Consistency & Stability (score + progress bar)
- **Execution History**: Tabular list of traces/logs
  - Timestamp, execution ID, status, duration, cost
  - Clickable rows that navigate to Level 3 trace view
  - Pagination and search functionality

## Level 3: Trace Visualization
**Deep Dive**: Interactive execution tree view
- **Tree Visualization**: Hierarchical execution flow
  - Clickable nodes representing execution steps
  - Color-coded status (success, error, warning)
  - Expandable/collapsible tree branches
- **Node Details Panel**: Metadata inspection
  - Step name and description
  - Execution timestamp
  - Input/output data
  - Performance metrics
  - Error messages if applicable
- **Navigation Controls**: Tree manipulation
  - Zoom in/out functionality
  - Expand all/collapse all buttons
  - Search within trace

## Evaluation System
**Dataset Management**: Create and manage evaluation datasets
- **Dataset Creation**: Upload and configure test data
  - File upload interface (CSV, JSON support)
  - Data preview and validation
  - Dataset naming and description
- **Evaluation Runner**: Execute evaluations
  - Application selection dropdown
  - Dataset selection
  - Evaluation configuration (parameters, thresholds)
  - Run button with progress indicator
- **Results Dashboard**: Evaluation outcomes
  - Summary statistics (pass/fail rates)
  - Detailed results table
  - Performance comparison charts
  - Export functionality for reports

## Interactive Components
1. **Real-time Data Updates**: Live refresh of metrics and status
2. **Advanced Filtering**: Multi-criteria search and filter system
3. **Drill-down Navigation**: Seamless navigation between dashboard levels
4. **Interactive Visualizations**: Clickable charts and progress indicators
5. **Export Functions**: Download reports and data
6. **Alert System**: Notifications for applications needing review

## Multi-turn Interaction Loops
- Dashboard filtering → Card selection → Application details → Trace analysis
- Evaluation setup → Dataset creation → Test execution → Results analysis
- Alert notification → Problem investigation → Root cause analysis → Resolution tracking