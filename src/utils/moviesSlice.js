import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nowPlayingMovies: null,       // Movies currently playing
  movieCategories: [],          // Categories like Action, Comedy, etc.
  trailerVideo: null,           // Stores trailer video for playback
  moviesByCategory: {},         // Stores movies grouped by category ID
  selectedMovie: null,          // Tracks the movie selected by the user
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieCategories: (state, action) => {
      state.movieCategories = action.payload;
    },
    addMoviesByCategory: (state, action) => {
      const { categoryId, movies } = action.payload;
      state.moviesByCategory[categoryId] = movies;
    },
    setSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload; // Store selected movie ID or details
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload; // Stores trailer video URL or details
    },
    clearTrailerVideo: (state) => {
      state.trailerVideo = null; // Resets trailer state
    },
  },
});

export const {
  addNowPlayingMovies,
  addMovieCategories,
  addMoviesByCategory,
  setSelectedMovie, // New feature
  addTrailerVideo,
  clearTrailerVideo,
} = moviesSlice.actions;

export default moviesSlice.reducer;
