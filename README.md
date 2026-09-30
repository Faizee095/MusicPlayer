# Vibes Music Player

Vibes is a responsive music discovery app for desktop and mobile. Browse featured tracks and artists, search for songs or artists, open track and artist details, and control playback from the built-in player.

## Features

- Discover music and browse the Top Charts, Around You, and Top Artists sections.
- Search for songs and artists.
- View artist and track detail pages, including related tracks where available.
- Use the player controls for play and pause, seeking, volume, previous and next tracks, repeat, and shuffle.
- Responsive navigation and layouts for small and large screens.

## Tech stack

- **React 18** for the user interface
- **Vite 2** for local development and production builds
- **React Router 6** for client-side navigation
- **Redux Toolkit** and **RTK Query** for player state and API data fetching/caching
- **Axios** for HTTP requests
- **Tailwind CSS 3**, PostCSS, and Autoprefixer for styling
- **React Icons** and **Swiper** for icons and carousels
- **Shazam Core API on RapidAPI** for music search and track data

## Getting started

### Requirements

- Node.js and npm
- A RapidAPI account with access to the Shazam Core API

### Install and configure

1. Install the dependencies:

   ```bash
   npm install
   ```

2. Create a local environment file by copying `.env.example` to `.env` (PowerShell: `Copy-Item .env.example .env`).

3. Set your RapidAPI key in `.env`:

   ```dotenv
   VITE_SHAZAM_CORE_RAPID_API_KEY=your_rapidapi_key
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

Vite prints the local URL in the terminal. Open it in a browser to use the app.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Build the app into `dist/` for deployment. |
| `npm run preview` | Serve the production build locally for review. Run `npm run build` first. |

## API notes and limitations

The app uses the Shazam Core API endpoints for track details, related tracks, and music search. API availability and request limits depend on the RapidAPI plan attached to your key. If a request fails, check the RapidAPI subscription status and usage limits, then inspect the browser network panel for the provider's response.

The chart endpoints previously used by the app are currently unavailable for this API subscription/provider configuration. The chart and location sections therefore use related-track recommendations as a fallback; they should not be treated as live country or genre charts. Search results also depend on the provider endpoint being available.

## Deployment and API key

This is a Vite client-side app. Variables prefixed with `VITE_` are embedded in the browser build, so the RapidAPI key is visible to users and `.env` does not make it a server-side secret. For a public deployment, use a backend proxy to keep the key off the client and enforce your own request limits. If you deploy the client directly, configure any key restrictions available through RapidAPI and monitor its usage.
