# Cell Tower Network Dashboard

A modern, responsive React dashboard application for monitoring and managing cell tower networks. Built with React 19, TypeScript, and D3.js for interactive data visualization.

![Dashboard Screenshot](https://img.shields.io/badge/React-19.1.0-61DAFB?style=flat&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF?style=flat&logo=vite&logoColor=white)
![D3.js](https://img.shields.io/badge/D3.js-7.9.0-F9A03C?style=flat&logo=d3.js&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-1.90.0-CC6699?style=flat&logo=sass&logoColor=white)

## 🚀 Features

### 📊 Data Visualization

- **Interactive Bar Chart**: Displays tower distribution across cities
- **Pie Chart**: Shows status distribution (Active vs Offline towers)
- **Responsive Charts**: Automatically adapt to different screen sizes
- **D3.js Integration**: High-performance, interactive data visualizations

### 📋 Data Management

- **Advanced Filtering**: Filter by city, network type (4G/5G), and status
- **Real-time Search**: Search towers by name with instant results
- **Clear Filters**: Quick reset functionality for all filters
- **Responsive Table**: Mobile-friendly table with horizontal scrolling

### 📱 User Experience

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Loading States**: Skeleton animations for better perceived performance
- **Modern UI**: Clean, professional interface with consistent styling
- **Accessibility**: Semantic HTML structure and keyboard navigation support

### 🎨 Design System

- **SCSS Architecture**: Modular, maintainable stylesheet organization using 7-1 pattern
- **Utility Classes**: Consistent spacing, typography, and layout utilities
- **Responsive Breakpoints**: Mobile-first design approach
- **Color System**: Professional color palette with semantic naming

## 🛠️ Tech Stack

### Core Technologies

- **React 19.1.0** - Latest React version with enhanced performance
- **TypeScript 5.8.3** - Type safety and enhanced developer experience
- **Vite 7.0.4** - Fast build tool and development server
- **D3.js 7.9.0** - Data-driven document manipulation for charts

### Styling & UI

- **SCSS/Sass 1.90.0** - Advanced CSS preprocessing
- **CSS Grid & Flexbox** - Modern layout techniques
- **Google Fonts** - Roboto font family for consistent typography
- **Responsive Design** - Mobile-first approach with multiple breakpoints

### Development Tools

- **ESLint 9.30.1** - Code linting with React-specific rules
- **Prettier 3.6.2** - Code formatting and style consistency
- **TypeScript ESLint** - TypeScript-aware linting rules

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── header/           # Application header
│   │   ├── sidebar/          # Navigation sidebar
│   │   └── index.tsx         # Main layout wrapper
│   └── shared/
│       └── icons/            # SVG icon components
│           ├── dashboard/
│           ├── filter/
│           ├── search/
│           ├── tower/
│           ├── active-tower/
│           ├── signal/
│           ├── logo/
│           └── circle-x/
├── pages/
│   └── dashboard/
│       ├── index.tsx         # Main dashboard page
│       └── components/
│           ├── summary-card/ # Statistics cards
│           ├── summary-card-list/
│           ├── summary-card-skeleton/
│           ├── bar-chart/    # D3.js bar chart
│           ├── pie-chart/    # D3.js pie chart
│           ├── chart-skeleton/
│           ├── table/        # Data table with filtering
│           ├── table-skeleton/
│           └── filter/       # Filter controls
├── styles/
│   └── scss/
│       ├── abstracts/        # Variables, mixins, functions
│       ├── base/            # Reset, typography, utilities
│       ├── components/      # Component-specific styles
│       ├── layout/          # Layout-specific styles
│       └── pages/           # Page-specific styles
├── types/
│   └── index.ts             # TypeScript type definitions
├── constants/
│   └── index.ts             # Static data and constants
├── utils/
│   └── index.ts             # Utility functions
└── App.tsx                  # Root application component
```

## 🏗️ Architecture

### Component Architecture

- **Functional Components**: Modern React patterns with hooks
- **Type Safety**: Comprehensive TypeScript interfaces
- **Modular Design**: Reusable components with clear separation of concerns
- **Props Interfaces**: Well-defined component APIs

### Styling Architecture

- **SCSS Modules**: Organized into abstracts, base, components, layout, and pages (7-1 pattern)
- **BEM Methodology**: Block, Element, Modifier naming convention
- **Responsive Mixins**: Consistent breakpoint management
- **Utility Classes**: Common styling patterns as reusable classes

### Data Flow

- **Static Data**: Cell tower data stored in constants
- **Local State**: React hooks for component state management
- **Prop Drilling**: Simple data passing for small application scope
- **Type Safety**: TypeScript interfaces for data structures

## 🎨 Design System

### Color Palette

```scss
// Primary Colors
$color-background: #fff;
$color-black: #0a0a0a;
$color-white: #ffffff;
$color-blue: #3b82f6;
$color-blue-light: #06b6d4;

// Status Colors
$color-active: #10b981;
$color-offline: #ef4444;
$color-yellow: #f59e0b;

// UI Colors
$color-background-sidebar: #fafafa;
$color-background-hover: whitesmoke;
$color-border: #e5e5e5;
$color-text-gray: #737373;
```

### Responsive Breakpoints

```scss
// Mobile: 0-599px
@include for-size(phone-only) { ... }

// Tablet Portrait: 600px+
@include for-size(tablet-portrait-up) { ... }

// Tablet Landscape: 900px+
@include for-size(tablet-landscape-up) { ... }

// Desktop: 1024px+
@include for-size(min-desktop-up) { ... }

// Large Desktop: 1200px+
@include for-size(desktop-up) { ... }
```

## 📊 Data Model

### CellTower Interface

```typescript
interface CellTower {
  id: string; // Unique identifier
  name: string; // Tower name (e.g., "Tower A")
  city: string; // Location city
  networkType: '4G' | '5G'; // Network type
  status: 'Active' | 'Offline'; // Operational status
  signalStrength: number; // Signal strength (1-5)
}
```

### Sample Data

The application includes 12 sample cell towers across 4 Egyptian cities:

- **Cairo**: 4 towers
- **Alexandria**: 3 towers
- **Hurghada**: 2 towers
- **Luxor**: 3 towers

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- Modern web browser with ES2022 support

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd ericsson-task
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code with ESLint
npm run lint
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
