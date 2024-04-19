import { Link } from "react-router-dom";
import { auth } from "../firebase/config";

function NavUserProfile() {
  const user = auth.currentUser;
  return (
    <div className="nav__user">
      <Link to="/mypage" className="user-profile">
        <span className="name">{user?.displayName}님</span>
        <div className="img-wrap">
          <img src="src/assets/images/icon_user.svg" alt="user" />
        </div>
      </Link>
    </div>
  );
}

export default NavUserProfile;
