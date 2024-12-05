import model from "../utils/genai";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import lang from "../utils/languageConstants";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Avengers, 3Idiots, KGF, Housefull, Venom";
    try {
      const result = await model.generateContent([gptQuery]);
      const gptResults = await result.response.text();
      const movieNames = gptResults.split(",").map((movie) => movie.trim());
      const promiseArray = movieNames.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);
      console.log(tmdbResults);
      dispatch(
        addGptMovieResult({ movieNames: movieNames, movieResults: tmdbResults })
      );
    } catch (error) {
      console.error("Error fetching movie recommendations:", error);
    }
  };
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center px-4 sm:px-8">
      
      <form
        className="w-full md:w-1/2 bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-lg shadow-lg grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        
        <input
          ref={searchText}
          type="text"
          className="p-2 m-2 col-span-12 sm:col-span-9 bg-gray-100 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-12 sm:col-span-3 m-2 py-2 px-4 bg-red-700 text-white rounded-lg hover:bg-red-800 transition duration-300 ease-in-out"
          onClick={handleGptSearchClick}
        >
          
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
