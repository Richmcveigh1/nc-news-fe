import { useState, useEffect } from "react";
import HomeArticleCard from "./Home-article-card";
import { getArticles } from "../../api";
import { Link } from "react-router-dom";

export default function HomeArticleContainer({ articles, setArticles }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    getArticles()
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error</p>;

  const homeArticleElements = articles.slice(0, 3).map((article) => (
    <div className="article-container" key={article.article_id}>
      <HomeArticleCard article={article} />
    </div>
  ));

  return (
    <div>
      <h2>Catch the buzz as it happens</h2>

      {homeArticleElements}
    </div>
  );
}
