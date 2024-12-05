import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-2/3 bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-lg shadow-lg grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9 bg-gray-100 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg hover:bg-red-800 transition duration-300 ease-in-out">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;