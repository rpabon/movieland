import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ENDPOINT, API_KEY } from '../constants';
import { getTrailerKey } from './store.utils';
import { MovieType } from '@/types/MovieType';

export const fetchSelectedMovie = createAsyncThunk<MovieType, number>(
  'fetch-single-movie',
  async (movieId) => {
    const url = new URL(`${ENDPOINT}/movie/${movieId}`);
    url.searchParams.append('api_key', API_KEY);
    url.searchParams.append('append_to_response', 'videos');

    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error('Failed to fetch movie data');
    }

    return response.json();
  }
);

const initialState: SelectedMovieState = {
  movie: null,
  status: 'idle',
  error: null,
  trailerKey: null,
  isModalOpen: false,
};

const selectedMovieSlice = createSlice({
  name: 'selectedMovie',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
    clearSelectedMovie: (state) => {
      state.movie = null;
      state.status = 'idle';
      state.error = null;
      state.trailerKey = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSelectedMovie.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchSelectedMovie.fulfilled, (state, action: PayloadAction<MovieType>) => {
        state.status = 'succeeded';
        state.movie = action.payload;
        state.trailerKey = getTrailerKey(action.payload);
      })
      .addCase(fetchSelectedMovie.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export interface SelectedMovieState {
  movie: MovieType | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  trailerKey: string | null;
  isModalOpen: boolean;
}

export default selectedMovieSlice;
