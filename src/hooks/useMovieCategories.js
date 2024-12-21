import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieCategories } from "../utils/moviesSlice";

const useMovieCategories = () => {
  const dispatch = useDispatch();
  const movieCategories = useSelector((store) => store.movies.movieCategories);

  const getMovieCategories = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list",  
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addMovieCategories(json.genres));  
  };

  useEffect(() => {
    if (!movieCategories || movieCategories.length === 0) {
      getMovieCategories();  
    }
  }, []);  
};

export default useMovieCategories;
