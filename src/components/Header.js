import { LOGO } from "../utils/constants"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
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

  return (
    <div className="absolute w-screen px-8 py-1 bg-gradient-to-b from-black to-transparent flex justify-between z-10">
      <img
        className="w-40 h-24"
        src={LOGO} alt="logo"
      />
      {user && (
        <div className="flex p-2">
          <img className="w-12 h-12 rounded-full" alt="usericon" src={user?.photoURL} />
          <button onClick={handleSignOut} className="font-bold text-white ">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;