# Next.js 15 Blog Management System

This is full-stack web application built with Next.js 15, Prisma, Kinde (for authentication), Tailwind CSS, and deployed on Vercel. The app allows users to sign up, create blog posts, view them on a dashboard, and display them on the homepage and individual routes.

## Features

- **Next.js 15**: Leverages the latest App Router, server components, and client components.
- **Authentication**: Integrated with Kinde for secure user sign-up, login, and session management.
- **Prisma**: ORM for database interactions with a PostgreSQL database (adaptable to other databases).
- **Tailwind CSS**: Responsive and modern UI styling.
- **Dynamic Routing**: Supports static and dynamic routes (e.g., `/post/[id]` for blog posts).
- **Server Actions**: Handles form submissions securely with data mutations, including creating, updating, and deleting blog posts.
- **Blog Management**: Allows users to create, update, and delete blog posts directly from the dashboard.
- **Streaming & Suspense**: Implements loading states and fallbacks for better UX.
- **Caching**: Configured for static rendering with revalidation and dynamic rendering as needed.
- **Deployment**: Hosted on Vercel with automatic scaling and domain management.