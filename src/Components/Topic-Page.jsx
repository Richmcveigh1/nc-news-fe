import { getArticlesByTopic } from "../../api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleCard from "./Article-card";
import CommentContainer from "./Comment-container";

export default function TopicPage() {
  const [topicArticles, setTopicArticles] = useState([]);
  const { topic, user_id } = useParams();
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    getArticlesByTopic(topic).then((data) => {
      setLoading(false);
      setTopicArticles(data);
    });
  }, [topic]);

  if (loading) return <p>Loading...</p>;
  else {
    return (
      <>
        <h1>{topic}</h1>

        {topicArticles.map((article) => (
          <div key={article.article_id}>
            <ArticleCard article={article} />
            <CommentContainer article_id={article.article_id} />
          </div>
        ))}
      </>
    );
  }
}
