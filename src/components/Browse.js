import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';  
import useMovieCategories from "../hooks/useMovieCategories";  
import useMoviesByCategories from "../hooks/useMoviesByCategories";

const Browse = () => {
   // Calling hooks to fetch data and populate the Redux store
  useMoviesByCategories();
  useNowPlayingMovies(); 
  useMovieCategories();  
  
  
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
