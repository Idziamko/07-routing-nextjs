# NoteHub - Next.js

This is my homework assignment for transitioning a React SPA project (NoteHub) into a multi-page Next.js application using the App Router.

## What was done
- Refactored the old SPA to a Next.js (App Router) project structure.
- Created static and dynamic routes (`/`, `/notes` and `/notes/[id]`).
- Implemented global layout with shared `Header` and `Footer` components.
- Set up Server-Side Rendering (SSR) along with prefetching data using `TanStack Query`. 
- Refactored all components (`Modal`, `Pagination`, `NoteForm`, etc.) to fit the Next.js approach.
- Kept all styling with CSS Modules based on the `hw-06` styles.
- Set up dynamic API routing with `NEXT_PUBLIC_NOTEHUB_TOKEN`.
- Added `error.tsx` and `loading.tsx` to handle fetching errors and loading states natively.

Enjoy!
