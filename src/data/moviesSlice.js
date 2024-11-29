import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchMovies = createAsyncThunk('fetch-movies', async ({ apiUrl, page = 1 }) => {
  const url = new URL(apiUrl);
  url.searchParams.set('page', page.toString());

  const response = await fetch(url.toString());
  return response.json();
});

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    fetchStatus: 'idle',
    currentPage: 1,
    totalPages: 1,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload.results;
        state.currentPage = action.payload.page;
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

export default moviesSlice;
