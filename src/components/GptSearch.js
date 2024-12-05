import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen py-4">
      
      <div className="fixed inset-0 -z-10">
        
        <img
          className="w-full h-full object-cover"
          src={BG_URL}
          alt="background"
        />
      </div>
      <div className="w-full px-4 sm:px-8 lg:px-16">
        
        <GptSearchBar />
      </div>
      <div className="w-full px-4 sm:px-8 lg:px-16 mt-8">
        
        <GptMovieSuggestions />
      </div>
    </div>
  );
};
export default GPTSearch;
