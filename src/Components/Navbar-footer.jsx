import { Link } from "react-router-dom";
import {  useEffect } from "react";
import { getTopic } from "../../api";

export default function Navbar({ topics, setTopics }) {
  useEffect(() => {
    getTopic().then((data) => {
      setTopics(data);
    });
  }, []);

  const topicElements = topics.map((topic) => (
    <div key={topic.slug}>
        {console.log(topic.slug)}
      <button className="nav-button">{topic.slug}</button>
    </div>
  ));

  return (
    <footer className="navbar">
        <button className="nav-button">home</button>
      {/* <Link to={`/topics/${}`} */}
      {topicElements}
    </footer>
  );
}
