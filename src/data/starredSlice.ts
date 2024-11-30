import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addToList, removeFromList } from './store.utils';
import { MovieType } from '@/types/MovieType';

const initialState: StarredState = {
  starredMovies: [],
};

const starredSlice = createSlice({
  name: 'starred',
  initialState,
  reducers: {
    starMovie: (state, action: PayloadAction<MovieType>) => {
      state.starredMovies = addToList(state.starredMovies, action.payload);
    },
    unstarMovie: (state, action: PayloadAction<MovieType>) => {
      state.starredMovies = removeFromList(state.starredMovies, action.payload);
    },
    clearAllStarred: (state) => {
      state.starredMovies = [];
    },
  },
});

export interface StarredState {
  starredMovies: MovieType[];
}

export default starredSlice;
