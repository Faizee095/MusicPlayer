import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      const apiKey = import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY;
      headers.set('X-RapidAPI-Key', apiKey);
      headers.set('X-RapidAPI-Host', 'shazam-core.p.rapidapi.com');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // The current Shazam Core deployment no longer serves the old /charts/* routes.
    // Related tracks and track details remain available on the v1 tracks API.
    getTopCharts: builder.query({ query: () => '/tracks/related?track_id=216314' }),
    getCountryCharts: builder.query({ query: () => '/tracks/related?track_id=216314' }),
    getGenreCharts: builder.query({ query: () => '/tracks/related?track_id=216314' }),
    searchSongs: builder.query({ query: (term) => `/search/multi?search_type=SONGS&query=${encodeURIComponent(term)}` }),
    searchArtists: builder.query({ query: (term) => `/search/multi?search_type=ARTISTS&query=${encodeURIComponent(term)}` }),
    getSongDetails: builder.query({ query: (id) => `/tracks/details?track_id=${encodeURIComponent(id)}` }),
    getArtistSongs: builder.query({ query: (name) => `/search/multi?search_type=SONGS&query=${encodeURIComponent(name)}` }),
    getRelatedSongs: builder.query({ query: (id) => `/tracks/related?track_id=${encodeURIComponent(id)}` }),
  }),
});

export const { useGetTopChartsQuery, useGetCountryChartsQuery, useGetGenreChartsQuery, useSearchSongsQuery, useSearchArtistsQuery, useGetSongDetailsQuery, useGetArtistSongsQuery, useGetRelatedSongsQuery } = shazamCoreApi;
