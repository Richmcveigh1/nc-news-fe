import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User-context";
import { useContext, useEffect } from "react";
import { getTopic, getArticlesByTopic } from "../../api";
import { useParams } from "react-router-dom";

export default function Title({topics, setTopics}) {
  const { loggedInUser } = useContext(UserContext);

  const { topic } = useParams();
  

  useEffect(() => {
    getTopic().then((data) => {
      setTopics(data);
    });
  }, []);

  const topicElements = topics.map((topic) => (
    <div key={topic.slug}>
      <Link to={`/${topic.slug}`}>
        <button className="nav-button">{topic.slug}</button>
      </Link>
    </div>
  ));


  return (
    <header className="title">
      <Link to="/">
        <h1>Worker Bee Review</h1>
      </Link>
      <div className="header-user">
        <img
          className="user-avatar-title"
          src={loggedInUser.avatar_url}
          alt="User Avatar"
        />
        <p>logged in as {loggedInUser.username}</p>
        <Link to={`/users`}>
          <p className="change-user">Change User</p>
        </Link>
      </div>
      <div className="navbar">
      <Link to="/all">
        <button className="nav-button">all articles</button>
      </Link>

      {topicElements}
      </div>
    </header>
  );
}
