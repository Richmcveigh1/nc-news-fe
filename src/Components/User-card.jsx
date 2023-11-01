import { UserContext } from "../contexts/User-context";
import { useContext } from "react";

export default function UserCard({ user }) {
  const { setLoggedInUser } = useContext(UserContext);
  const { username, name, avatar_url } = user;

  const switchUser = () => {
    setLoggedInUser({
      username,
      name,
      avatar_url,
    });
  };

  return (
    <div className="user-card" onClick={switchUser}>
      <p className="usercard-username">{username}</p>
      <img className="user-avatar-usercard" src={avatar_url} alt={`${username}'s profile picture`}></img>
    </div>
  );
}
