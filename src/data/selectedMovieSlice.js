import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ENDPOINT, API_KEY } from '../constants';
import { getTrailerKey } from './store.utils';

export const fetchSelectedMovie = createAsyncThunk('fetch-single-movie', async (movieId) => {
  const url = new URL(`${ENDPOINT}/movie/${movieId}`);
  url.searchParams.append('api_key', API_KEY);
  url.searchParams.append('append_to_response', 'videos');

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error('Failed to fetch movie data');
  }

  return response.json();
});

const selectedMovieSlice = createSlice({
  name: 'selectedMovie',
  initialState: {
    movie: null,
    status: 'idle',
    error: null,
    trailerKey: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSelectedMovie.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchSelectedMovie.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movie = action.payload;
        state.trailerKey = getTrailerKey(action.payload);
      })
      .addCase(fetchSelectedMovie.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default selectedMovieSlice;
