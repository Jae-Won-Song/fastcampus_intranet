import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../firebase/config";
import { useState, useEffect } from "react";

function NavUserProfile() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        if (location.pathname === "/") {
          navigate("/main");
        }
      } else {
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="nav__user">
      <Link to="/mypage" className="user-profile">
        <div className="name">
          <span>{user?.displayName}</span>님
        </div>
        <div className="img-wrap">
          <img src="src/assets/images/icon_user.svg" alt="user" />
        </div>
      </Link>
    </div>
  );
}

export default NavUserProfile;
