# Overview

CuraOne is a modern healthcare clinic management platform designed as a waitlist landing page. The application uses a full-stack TypeScript architecture with React on the frontend and Express.js on the backend. It implements a clean, medical-themed user interface for clinic administrators to join a waitlist for the platform.

The system focuses on capturing clinic information including email, clinic name, and clinic size through a validated form interface. The application is built with modern web technologies and follows best practices for performance, accessibility, and maintainability.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Form Handling**: React Hook Form with Zod validation resolver

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Validation**: Zod schemas for runtime type validation
- **Session Management**: PostgreSQL session store with connect-pg-simple
- **Development**: tsx for TypeScript execution in development

## Database Design
- **Primary Database**: PostgreSQL (configured via Neon Database serverless)
- **Schema**: Two main tables - users and waitlist
- **Users Table**: Basic authentication with username/password
- **Waitlist Table**: Captures email, clinic name, clinic size, and timestamps
- **Validation**: Drizzle-zod integration for type-safe database operations

## Development Architecture
- **Monorepo Structure**: Shared schema between client and server
- **Type Safety**: End-to-end TypeScript with shared types
- **Hot Reload**: Vite HMR for frontend, tsx watch mode for backend
- **Build Process**: Separate build steps for client (Vite) and server (esbuild)

## Storage Layer
- **Production**: PostgreSQL with Drizzle ORM
- **Development**: In-memory storage implementation for rapid prototyping
- **Database Migrations**: Drizzle Kit for schema management
- **Connection**: Environment-based database URL configuration

## Security & Validation
- **Input Validation**: Zod schemas on both client and server
- **Form Validation**: Real-time validation with error handling
- **CORS**: Configured for cross-origin requests
- **Error Handling**: Centralized error middleware with proper HTTP status codes

# External Dependencies

## Core Frontend Dependencies
- **@tanstack/react-query**: Server state management and caching
- **@hookform/resolvers**: Form validation integration
- **wouter**: Lightweight React router
- **react-hook-form**: Form state management
- **date-fns**: Date manipulation utilities

## UI Component Libraries
- **@radix-ui/***: Accessible UI primitives (dialog, form controls, navigation)
- **lucide-react**: SVG icon library
- **class-variance-authority**: Component variant styling
- **clsx** & **tailwind-merge**: CSS class manipulation

## Backend Dependencies
- **express**: Web application framework
- **drizzle-orm**: Type-safe ORM for PostgreSQL
- **@neondatabase/serverless**: Serverless PostgreSQL client
- **connect-pg-simple**: PostgreSQL session store
- **zod**: Runtime type validation

## Development Tools
- **vite**: Frontend build tool and dev server
- **drizzle-kit**: Database schema management
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Server-side bundling for production
- **tailwindcss**: Utility-first CSS framework
- **postcss**: CSS processing pipeline

## External Services
- **Neon Database**: Serverless PostgreSQL hosting
- **Replit**: Development environment and deployment platform
- **Google Fonts**: Web font delivery (Inter, DM Sans, Fira Code, etc.)