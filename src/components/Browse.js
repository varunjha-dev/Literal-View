import Header from "./Header";
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from "../hooks/usePopularMovies";


const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  
  return (
    <div>
    <Header />
    <MainContainer />
    <SecondaryContainer />
  </div>
  );
};
/* design
          SecondaryContainer
            - MovieList * n
              - cards * n
      */
export default Browse
