import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nowPlayingMovies: null,
  popularMovies: null,
  movieCategories: [], // Categories like Action, Comedy, etc.
  trailerVideo: null, // Trailer video for playback
  moviesByCategory: {}, // Stores movies by category ID (for dynamic categories like Action, Drama, etc.)
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
  
    addMovieCategories: (state, action) => {
      state.movieCategories = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload; // Stores trailer video details
    },
    clearTrailerVideo: (state) => {
      state.trailerVideo = null; // Clears the trailer video when closing
    },
    addMoviesByCategory: (state, action) => {
      const { categoryId, movies } = action.payload;
      state.moviesByCategory[categoryId] = movies;
    },
  },
});

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addMovieCategories,
  addTrailerVideo,
  clearTrailerVideo,
  addMoviesByCategory, // New action to store movies by category
} = moviesSlice.actions;

export default moviesSlice.reducer;
