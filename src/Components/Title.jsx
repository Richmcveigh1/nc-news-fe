import { Link } from "react-router-dom";
import { UserProvider } from "./User";


export default function Title() {
  return (
    <header className="title">
      <Link to="/">
      <h1>Worker Bee Review</h1>
      </Link>
      <Link to={`/users`}>
    <p>log in</p>
    
     </Link>
    </header>
  );
}
