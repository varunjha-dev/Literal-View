import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMoviesByCategory } from "../utils/moviesSlice";

// Hook to fetch and store movies for multiple categories
const useMoviesByCategories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((store) => store.movies.movieCategories);
  const moviesByCategory = useSelector((store) => store.movies.moviesByCategory);

  // Fetch movies for each category
  const getMoviesByCategory = async (categoryId) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${categoryId}&page=1`,
      API_OPTIONS
    );
    const data = await response.json();
    // Dispatch the action to add movies to the Redux store
    dispatch(addMoviesByCategory({ categoryId, movies: data.results }));
  };

  // Fetch movies for top categories only
  useEffect(() => {
    if (categories?.length > 0) {
      categories.slice(0, 10).forEach((category) => {
        // Fetch movies only if not already fetched for the category
        if (!moviesByCategory[category.id]) {
          getMoviesByCategory(category.id);
        }
      });
    }
  }, [categories, dispatch, moviesByCategory]); // Dependencies: categories, dispatch, and moviesByCategory

  return moviesByCategory;
};

export default useMoviesByCategories;
