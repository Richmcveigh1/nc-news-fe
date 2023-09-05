import { useState, useEffect } from "react";
import ArticleCard from "./Article-card";
import { getArticles } from "../../api";

export default function ArticleContainer({articles, setArticles}) {

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

  const articleElements = articles.map((article) => (
    <div key={article.article_id}>
      <ArticleCard article={article} />
    </div>
  ));

  return <div className="article-container">
    {articleElements}</div>;
}
