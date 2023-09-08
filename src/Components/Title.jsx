import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User-context";
import { useContext } from "react";


export default function Title() {
  const {loggedInUser} = useContext(UserContext)
  return (
    <header className="title">
      <Link to="/">
      <h1>Worker Bee Review</h1>
      </Link>
        <img className="user-avatar-title" src={loggedInUser.avatar_url}/>
        <p>logged in as {loggedInUser.username}</p>
      <Link to={`/users`}>
    <p>Change User</p>

    
     </Link>
    </header>
  );
}
