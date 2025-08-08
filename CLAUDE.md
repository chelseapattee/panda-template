# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` or `npm start`
- **Build production**: `npm run build`
- **Build with specific configuration**: `ng build --configuration=production`

## Architecture

This is an Angular 17 standalone component application using:

- **Routing**: File-based routing with lazy loading support defined in `src/app/app.routes.ts`
- **UI Framework**: Angular Material for components and theming
- **Application Structure**: 
  - Bootstrap entry point in `src/main.ts` using `bootstrapApplication`
  - Main app component includes navigation with desktop/mobile responsive design
  - Page components: Home, Projects, Project Detail, Contact
  - Standalone components architecture (no NgModules)

## Key Files

- `src/main.ts`: Application bootstrap and provider configuration
- `src/app/app.routes.ts`: Route definitions for the portfolio site
- `angular.json`: Build configuration for "demo" project
- `src/global_styles.css`: Global application styles

## Project Structure

The application is a portfolio site with:
- Home page
- Projects listing with individual project detail pages (parameterized routes)
- Contact page
- Responsive navigation (desktop menu + mobile hamburger menu)

## Notes

- Uses Angular Material components extensively for UI
- Configured for both development and production builds with different optimization settings
- No test framework currently configured in package.json