# Iteeha Coffee Website

## Overview

This is a full-stack web application for Iteeha Coffee, featuring a modern React frontend with a Node.js/Express backend. The application showcases the coffee shop's brand, story, gallery, and contact information through an elegant, responsive website. Built with TypeScript throughout and leveraging modern web technologies like shadcn/ui components, Tailwind CSS, and TanStack Query for state management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and building
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom coffee-themed color palette and design system
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite with custom configuration for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules
- **Development**: tsx for TypeScript execution in development
- **Build**: esbuild for fast production builds
- **Storage**: In-memory storage implementation with interface for future database integration
- **Middleware**: Custom logging, JSON parsing, and error handling

### Database Architecture
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: PostgreSQL via Neon Database serverless connection
- **Schema**: User management schema defined in shared directory
- **Migrations**: Drizzle Kit for database schema management
- **Current State**: Memory storage implementation as placeholder

### Project Structure
- **Monorepo Layout**: Client, server, and shared code in organized directories
- **Shared Schema**: Common TypeScript types and Zod validation schemas
- **Path Aliases**: Configured aliases for clean imports (@, @shared, @assets)
- **Component Organization**: Modular React components with clear separation of concerns

### Key Features
- **Hero Carousel**: Auto-rotating image slider showcasing coffee shop atmosphere
- **Interactive Gallery**: Grid layout with lightbox functionality for image viewing
- **Responsive Navigation**: Mobile-friendly navigation with hamburger menu
- **Contact Information**: Location, hours, and contact details presentation
- **Brand Integration**: Consistent use of Iteeha Coffee branding and imagery

## External Dependencies

### Database & ORM
- **Neon Database**: Serverless PostgreSQL database hosting
- **Drizzle ORM**: Type-safe ORM with PostgreSQL dialect
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### UI & Styling
- **Radix UI**: Comprehensive set of accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Lucide React**: Modern icon library
- **shadcn/ui**: Pre-built component library based on Radix UI

### Development & Build Tools
- **Vite**: Fast build tool with React plugin and runtime error overlay
- **TypeScript**: Type safety across the entire application
- **esbuild**: Fast JavaScript/TypeScript bundler for production builds
- **tsx**: TypeScript execution engine for development

### State & Form Management
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form handling with validation
- **Zod**: Schema validation library integrated with Drizzle

### Utilities & Enhancements
- **date-fns**: Date manipulation and formatting utilities
- **clsx & tailwind-merge**: Conditional CSS class utilities
- **class-variance-authority**: Type-safe CSS variant management
- **Embla Carousel**: Carousel/slider functionality
