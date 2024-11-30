import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { clearList } from './store.utils';

export const fetchMovies = createAsyncThunk('fetch-movies', async ({ apiUrl, page = 1 }) => {
  const url = new URL(apiUrl);
  url.searchParams.set('page', page.toString());

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }

  return response.json();
});

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    fetchStatus: 'idle',
    totalPages: 1,
  },
  reducers: {
    clearMovies: (state) => {
      state.movies = clearList();
      state.totalPages = 1;
      state.fetchStatus = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.fulfilled, (state, action) => {
        const existingMovieIds = new Set(state.movies.map((movie) => movie.id));
        const newUniqueMovies = action.payload.results.filter(
          (movie) => !existingMovieIds.has(movie.id)
        );

        state.movies = [...state.movies, ...newUniqueMovies];
        state.totalPages = action.payload.total_pages;
        state.fetchStatus = 'success';
      })
      .addCase(fetchMovies.pending, (state) => {
        state.fetchStatus = 'loading';
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.fetchStatus = 'error';
      });
  },
});

export const { clearMovies } = moviesSlice.actions;
export default moviesSlice;
