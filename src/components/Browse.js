import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';  // Fetch now playing movies
import useMovieCategories from "../hooks/useMovieCategories";  // Fetch movie categories
import useMoviesByCategories from "../hooks/useMoviesByCategories";

const Browse = () => {
  // Calling hooks to fetch data and populate the Redux store
  useNowPlayingMovies(); 
  useMovieCategories();  // Fetch movie categories
  useMoviesByCategories();
  
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div className="overflow-x-hidden">
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
