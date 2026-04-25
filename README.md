# NoteHub - Next.js Routing

This is a homework assignment implementing advanced routing features in a Next.js (App Router) application.

## Features Implemented:
1. **Custom 404 Page:** 
   Added a custom `app/not-found.tsx` page to handle non-existent routes.

2. **Note Filtering (Parallel Routes + Catch-all):**
   - Added a `SidebarNotes` component rendered using a parallel route (`@sidebar`).
   - Implemented tag-based filtering using a catch-all route (`[...slug]`). Navigating to `/notes/filter/Work` updates the URL and filters the notes without reloading the entire page.

3. **Note Preview Modal (Intercepting Routes):**
   - Implemented a `NotePreview` component that displays note details inside a modal.
   - Used intercepting routes (`(.)[id]`) so clicking on a note opens the modal on top of the note list without losing the background context. Closing the modal navigates back correctly.

## Technologies Used:
- Next.js (App Router)
- React Query (TanStack Query) for data fetching
- CSS Modules for styling
- TypeScript

## How to Run:
1. Run `npm install`
2. Create a `.env` file and add your `NEXT_PUBLIC_NOTEHUB_TOKEN`
3. Run `npm run dev`
