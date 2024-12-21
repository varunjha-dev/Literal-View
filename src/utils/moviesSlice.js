import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nowPlayingMovies: null,       
  movieCategories: [],          
  trailerVideo: null,         
  moviesByCategory: {},       
  selectedMovie: null,         
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
      state.selectedMovie = action.payload; 
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload; 
    },
    clearTrailerVideo: (state) => {
      state.trailerVideo = null;
    },
  },
});

export const {
  addNowPlayingMovies,
  addMovieCategories,
  addMoviesByCategory,
  setSelectedMovie, 
  addTrailerVideo,
  clearTrailerVideo,
} = moviesSlice.actions;

export default moviesSlice.reducer;
