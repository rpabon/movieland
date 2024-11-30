import { configureStore } from '@reduxjs/toolkit';
import moviesSlice from './moviesSlice';
import starredSlice from './starredSlice';
import watchLaterSlice from './watchLaterSlice';
import selectedMovieSlice from './selectedMovieSlice';

const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer,
    starred: starredSlice.reducer,
    watchLater: watchLaterSlice.reducer,
    selectedMovie: selectedMovieSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
