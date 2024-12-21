import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import useMovieCategories from "../hooks/useMovieCategories";
import useMoviesByCategories from "../hooks/useMoviesByCategories";

const SecondaryContainer = () => {
  useMovieCategories();  // Fetch categories from the API
  useMoviesByCategories();
  const categories = useSelector((store) => store.movies.movieCategories);  
  const moviesByCategory = useMoviesByCategories();  

  // Slice top 10 categories for display
  const topCategories = categories?.slice(0, 10);

  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt- pl-4 md:pl-12 relative z-20 overflow-hidden">
        {topCategories?.map((category) => {
          
          const categoryMovies = moviesByCategory[category.id];

          return (
            <MovieList
              key={category.id}
              title={category.name}
              movies={categoryMovies} 
            />
          );
        })}
      </div>
    </div>
  );
};

export default SecondaryContainer;
