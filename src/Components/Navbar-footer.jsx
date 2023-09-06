import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getTopic, getArticlesByTopic } from "../../api";
import { useParams } from "react-router-dom";

export default function Navbar({ topics, setTopics }) {
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
    <footer className="navbar">
      <Link to="/all">
        <button className="nav-button">all articles</button>
      </Link>

      {topicElements}
    </footer>
  );
}
