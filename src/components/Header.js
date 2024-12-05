import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
         // User is signed in, see docs for a list of available properties
         
         const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
     // Unsiubscribe when component unmounts
     return () => unsubscribe();

  },[]); 
  //*Empty array means "run once, after the initial render."
  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute w-screen px-8 py-1 bg-gradient-to-b from-black to-transparent flex justify-between z-10">
      <img
        className="w-40 h-24"
        src={LOGO} alt="logo"
      />
      {user && (
        <div className="flex items-center space-x-4">
           {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
           <button
            className="bg-gradient-to-r from-red-400 to-pink-800 text-white py-1 px-3 text-lg rounded-full shadow-md transition duration-300 transform hover:scale-105 hover:shadow-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img className="w-12 h-12 rounded-full" alt="usericon" src={user?.photoURL} />
          <button onClick={handleSignOut} className="bg-gradient-to-r from-pink-800 to-pink-950 text-white py-1 px-3 text-lg rounded-full shadow-md transition duration-300 transform hover:scale-105 hover:shadow-lg ">
            Sign Out
          </button>
        </div>
      )}
    </div>  
  );
};
export default Header;