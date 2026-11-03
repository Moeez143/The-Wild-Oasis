The Wild Oasis - Project Overview 🏨
This is a hotel/cabin management dashboard built with React and Vite. It's a full-featured admin application for managing bookings, cabins, guests, and staff.

Tech Stack
Technology Purpose
React 18 Frontend UI framework
Vite Fast build tool & dev server
React Router v6 Client-side routing
Supabase Backend (PostgreSQL database + auth)
React Query (TanStack) Data fetching & caching
Styled Components CSS-in-JS styling
React Hook Form Form management
React Hot Toast Notifications
Recharts Data visualization
Project Structure & Features
📁 Core Folders
Folder Purpose
features/ Feature modules (authentication, bookings, cabins, etc.)
pages/ Route pages (Dashboard, Bookings, Cabins, Users, Settings, Account)
ui/ Reusable UI components (Button, Input, Modal, Table, etc.)
services/ API calls to Supabase
context/ Global state management (Dark Mode)
hooks/ Custom React hooks
styles/ Global styling & CSS variables
data/ Sample data & image assets
🔐 Authentication Features
Login/Signup: User registration and login
Update Password: Change password form
User Data Update: Edit profile information
Protected Routes: Only authenticated users can access admin pages
User Avatar: Display logged-in user info
Files: features/authentication/

📅 Bookings Management
View all bookings with filters and sorting
Booking details page
Check-in/Check-out functionality
Delete bookings
Real-time status updates
Files: features/bookings/ & pages/Bookings.jsx, pages/Booking.jsx, pages/Checkin.jsx

🏠 Cabins Management
View all cabins in a table
Add/Edit cabins with images
Delete cabins
Filter & sort cabins
Cabin pricing & capacity information
Files: features/cabins/ & pages/Cabins.jsx

👥 Users & Settings
Users page: Manage staff/employees
Settings page: Configure app settings
Account page: User profile management
Files: pages/Users.jsx, pages/Settings.jsx, pages/Account.jsx

📊 Dashboard
Overview statistics
Charts & analytics using Recharts
Recent bookings summary
Files: features/dashboard/ & pages/Dashboard.jsx

Application Flow
Key Architectural Patterns

1. Context + Hooks for State
   Dark Mode: Global theme toggle (stored in localStorage)
   Custom Hooks: useUser, useBookings, useBooking, useCabins, etc.
2. React Query for Server State
   Handles API calls to Supabase
   Automatic caching & refetching
   Real-time mutations (create, update, delete)
3. Component Organization
   Smart Components (pages + feature hooks): Handle data logic
   Dumb Components (ui/): Display data with props
4. Error Handling
   Error Boundary: Catches crashes & shows fallback UI
   Toast Notifications: User feedback for actions
5. Dark Mode
   Uses CSS classes (dark-mode, light-mode)
   CSS variables for theme colors
   Persisted in localStorage
   Database (Supabase)
   The app connects to a Supabase PostgreSQL database with tables for:

users: Staff/admin accounts
bookings: Guest reservations
cabins: Property listings
guests: Guest information
settings: App configuration
Deployment on Vercel
Built with Vite → optimized production bundle
SPA (Single Page App) → needs vercel.json for routing (which we just created!)
Environment: Uses Supabase URLs/keys (public keys are safe in frontend)
Summary
The Wild Oasis is a professional hotel management dashboard with: ✅ Authentication & authorization
✅ Booking management
✅ Cabin/property management
✅ Staff management
✅ Analytics & reporting
✅ Dark mode support
✅ Responsive design
✅ Error handling & notifications

Daily Supabase keep-alive

The Vercel cron in vercel.json calls /api/keep-alive once a day at 00:00 UTC
(05:00 in Pakistan). The function makes three small, read-only database requests
to settings, cabins, and bookings. It does not create or change records.

Before deploying, add a random CRON_SECRET of at least 16 characters to this
Vercel project's Production environment variables, then redeploy. Vercel sends
it as a Bearer token when invoking the cron. Without it, the endpoint returns
401 and no keep-alive requests are made. After deployment, verify the Cron Jobs
page and function logs in Vercel show successful runs.

Supabase says a few database requests each day usually prevent Free Plan
inactivity pauses, but this is not guaranteed. If the project is already
paused, resume it in Supabase before relying on the job.