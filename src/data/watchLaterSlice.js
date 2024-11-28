import { createSlice } from '@reduxjs/toolkit';
import { addToList, removeFromList, clearList } from './store.utils';

const watchLaterSlice = createSlice({
  name: 'watch-later',
  initialState: {
    watchLaterMovies: [],
  },
  reducers: {
    addToWatchLater: (state, action) => {
      state.watchLaterMovies = addToList(state.watchLaterMovies, action.payload);
    },
    removeFromWatchLater: (state, action) => {
      state.watchLaterMovies = removeFromList(state.watchLaterMovies, action.payload);
    },
    removeAllWatchLater: (state) => {
      state.watchLaterMovies = clearList();
    },
  },
});

export default watchLaterSlice;
