import { createSlice } from '@reduxjs/toolkit';
import { addToList, removeFromList, clearList } from './store.utils';

const starredSlice = createSlice({
  name: 'starred',
  initialState: {
    starredMovies: [],
  },
  reducers: {
    starMovie: (state, action) => {
      state.starredMovies = addToList(state.starredMovies, action.payload);
    },
    unstarMovie: (state, action) => {
      state.starredMovies = removeFromList(state.starredMovies, action.payload);
    },
    clearAllStarred: (state) => {
      state.starredMovies = clearList();
    },
  },
});

export default starredSlice;
