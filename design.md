# Agent Application Management Portal - Design Style Guide

## Design Philosophy

### Visual Language
- **Professional Enterprise Aesthetic**: Clean, sophisticated interface suitable for business environments
- **Data-Driven Design**: Emphasis on clarity, readability, and efficient information hierarchy
- **Minimalist Approach**: Reducing visual noise while maintaining rich functionality
- **Trust and Reliability**: Visual cues that inspire confidence in the system's accuracy and stability

### Color Palette
- **Primary Colors**: 
  - Deep Navy (#1a365d) - Primary interface elements
  - Slate Blue (#4a5568) - Secondary elements and borders
  - Cool Gray (#718096) - Text and subtle backgrounds
- **Accent Colors**:
  - Success Green (#38a169) - Positive metrics, active states
  - Warning Amber (#d69e2e) - Attention needed, moderate issues
  - Error Red (#e53e3e) - Critical issues, failures
  - Info Blue (#3182ce) - Informational elements, links
- **Background**: Consistent light gray (#f7fafc) throughout all pages

### Typography
- **Primary Font**: Inter (sans-serif) - Modern, highly legible for data interfaces
- **Secondary Font**: JetBrains Mono (monospace) - For code, timestamps, technical data
- **Hierarchy**:
  - H1: 32px, bold - Page titles
  - H2: 24px, semibold - Section headers
  - H3: 18px, medium - Subsection headers
  - Body: 14px, regular - Main content
  - Caption: 12px, regular - Metadata, timestamps

## Visual Effects and Styling

### Used Libraries
- **Anime.js**: Smooth micro-interactions and state transitions
- **ECharts.js**: Professional data visualization with consistent color theming
- **Splitting.js**: Text animation effects for headings and metrics
- **Matter.js**: Subtle physics-based animations for interactive elements
- **Pixi.js**: High-performance visual effects for dashboard backgrounds

### Animation Strategy
- **Subtle Motion**: Gentle transitions that enhance usability without distraction
- **Performance Focus**: Optimized animations that maintain 60fps
- **Purposeful Effects**: Animations that provide feedback and guide attention

### Header Effect
- **Gradient Flow Background**: Subtle animated gradient using CSS and Pixi.js
- **Floating Particles**: Minimal particle system suggesting data flow and activity
- **Depth Layering**: Multiple visual planes creating sophisticated depth

### Interactive Elements
- **Hover States**: Gentle elevation and color shifts on cards and buttons
- **Loading States**: Skeleton screens and progress indicators
- **Status Indicators**: Animated dots and progress bars for real-time updates
- **Micro-interactions**: Button press feedback, form validation animations

### Data Visualization Style
- **Consistent Theming**: All charts use the same color palette and styling
- **Clean Aesthetics**: Minimal grid lines, clear labels, readable scales
- **Interactive Elements**: Hover tooltips, clickable legend items
- **Responsive Design**: Charts adapt to different screen sizes

### Layout Principles
- **Grid System**: 12-column responsive grid for consistent alignment
- **White Space**: Generous spacing for improved readability
- **Content Hierarchy**: Clear visual distinction between primary and secondary information
- **Mobile Responsive**: Touch-friendly interface elements and appropriate sizing

### Component Styling
- **Cards**: Subtle shadows, rounded corners (8px), clean borders
- **Buttons**: Consistent padding, clear hierarchy, appropriate contrast
- **Forms**: Clean input styling, clear validation states
- **Tables**: Zebra striping, sortable headers, clear data presentation