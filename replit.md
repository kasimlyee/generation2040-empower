# Generation 2040 NGO Website

## Overview

Generation 2040 is a React-based website for an NGO operating in Buikwe District, Uganda. The organization focuses on psycho-social and economic empowerment of local communities. The website serves as a digital platform to showcase their programs, share impact stories, facilitate community engagement, and provide information about volunteer opportunities and donations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: React Router for client-side navigation with dedicated pages for different sections
- **Styling**: Tailwind CSS for utility-first styling with a custom design system featuring warm, professional colors
- **UI Components**: Radix UI primitives with shadcn/ui components for accessible, customizable interface elements
- **State Management**: React Query (TanStack Query) for server state management and API data fetching
- **Build Tool**: Vite for fast development and optimized production builds

### Design System
- **Color Palette**: Warm orange primary colors representing hope and energy, earth green for growth and sustainability, and deep blue for trust and stability
- **Component Library**: Comprehensive set of reusable UI components including cards, buttons, forms, navigation, and layout components
- **Responsive Design**: Mobile-first approach with responsive breakpoints for optimal viewing across devices

### Application Structure
- **Pages**: Multi-page application with dedicated routes for Home, About, Programs, Get Involved, News, Events, Gallery, Impact, and Contact
- **Components**: Modular component architecture with shared UI components, navigation, and footer
- **Assets**: Local image assets for hero sections and program illustrations
- **Styling**: Custom CSS variables for consistent theming and smooth animations

### Data Management
- **Static Content**: Content is currently managed through static data structures within components
- **Form Handling**: React Hook Form integration for contact forms and volunteer applications
- **Validation**: Zod schema validation for form inputs and data integrity

### Performance Optimizations
- **Code Splitting**: Vite's automatic code splitting for efficient bundle loading
- **Image Optimization**: Responsive images with proper sizing and lazy loading considerations
- **CSS Optimization**: Tailwind's purging mechanism for minimal CSS bundle size

## External Dependencies

### Core Libraries
- **React Ecosystem**: React 18, React Router, React Hook Form, React Query for robust frontend functionality
- **UI Framework**: Radix UI primitives for accessible component foundations
- **Styling**: Tailwind CSS with PostCSS for advanced styling capabilities
- **Form Management**: React Hook Form with Hookform Resolvers for form validation
- **Validation**: Zod for runtime type checking and schema validation

### Development Tools
- **Build System**: Vite with React SWC plugin for fast compilation and hot module replacement
- **TypeScript**: Full TypeScript setup with strict configuration for type safety
- **Linting**: ESLint configuration for code quality and consistency

### Utility Libraries
- **Class Management**: clsx and class-variance-authority for conditional CSS classes
- **Date Handling**: date-fns for date formatting and manipulation
- **Icons**: Lucide React for consistent iconography throughout the application
- **Animations**: CSS-based animations with Tailwind utilities

### Potential Database Integration
- **Drizzle ORM**: Configured for potential database integration with schema definitions
- **Neon Database**: Set up for serverless PostgreSQL database connectivity
- **Session Management**: Connect-pg-simple for PostgreSQL session storage capabilities

The application is designed to be easily deployable on modern hosting platforms with static site generation capabilities, while maintaining the flexibility to add dynamic features and database connectivity as the organization's needs grow.