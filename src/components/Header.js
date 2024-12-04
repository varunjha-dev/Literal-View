import { LOGO } from "../utils/constants"
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
const Header = () => {
 
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen px-8 py-1 bg-gradient-to-b from-black to-transparent flex justify-between z-10">
      <img
        className="w-40 h-24"
        src={LOGO} alt="logo"
      />
      {user && (
        <div className="flex p-2">
          <img className="w-12 h-12 rounded" alt="usericon" src={user?.photoURL} />
          <button onClick={handleSignOut} className="font-bold text-white ">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;