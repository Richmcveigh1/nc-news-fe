import { getArticlesByTopic } from "../../api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleCard from "./Article-card";

export default function TopicPage() {
  const [topicArticles, setTopicArticles] = useState([]);
  const { topic } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getArticlesByTopic(topic).then((data) => {
   
      setLoading(false);
      setTopicArticles(data);
    });
  }, [topic]);

  const articleElements = topicArticles.map((article) => (
    <div key={article.article_id}>
      <ArticleCard article={article} />
    </div>
  ));

  if (loading) return <p>Loading...</p>;
  else {
    return (
      <>
        <h1>{topic}</h1>
        {articleElements}
      </>
    );
  }
}
