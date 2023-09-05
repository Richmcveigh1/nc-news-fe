import { Link } from "react-router-dom";

export default function Title() {
  return (
    <header className="title">
      <Link to="/">
      <h1>Worker Bee Review</h1>
      </Link>
      
    </header>
  );
}
