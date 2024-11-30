import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addToList, removeFromList } from '@/data/store.utils';
import { MovieType } from '@/types/MovieType';

const initialState: WatchLaterState = {
  watchLaterMovies: [],
};

const watchLaterSlice = createSlice({
  name: 'watch-later',
  initialState,
  reducers: {
    addToWatchLater: (state, action: PayloadAction<MovieType>) => {
      state.watchLaterMovies = addToList(state.watchLaterMovies, action.payload);
    },
    removeFromWatchLater: (state, action: PayloadAction<MovieType>) => {
      state.watchLaterMovies = removeFromList(state.watchLaterMovies, action.payload);
    },
    removeAllWatchLater: (state) => {
      state.watchLaterMovies = [];
    },
  },
});

interface WatchLaterState {
  watchLaterMovies: MovieType[];
}

export default watchLaterSlice;
