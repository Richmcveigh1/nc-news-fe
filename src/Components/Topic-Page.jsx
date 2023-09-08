import { getArticlesByTopic } from "../../api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sort from "./Sort-Dropdown";
import ArticleCard from "./Article-card";
import { sortArticles } from "../../api";

export default function TopicPage() {
  const [topicArticles, setTopicArticles] = useState([]);
  const { topic } = useParams();
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("created_at");
  const [sortedArticles, setSortedArticles] = useState();
  const [order, setOrder] = useState('DESC')
  

  useEffect(() => {
    setLoading(true);
    getArticlesByTopic(topic).then((data) => {
      setLoading(false);
      setTopicArticles(data);
    });
  }, [topic]);

  useEffect(() => {
    setLoading(true);
    sortArticles(topic, category, order)
      .then((data) => {
       
        setLoading(false);
        setSortedArticles(data);
      })
      .catch(() => {
        setLoading(false);
      
      });
  }, [topic, category, order]);
  

  if (loading) return <p>Loading...</p>;
  else {
    return (
      <>
        <h1>{topic}</h1>
        <Sort
          topic={topic}
          category={category}
          setCategory={setCategory}
          order={order}
          setOrder={setOrder}
        />

        {topicArticles.map((article) => (
          <div key={article.article_id}>
        <ArticleCard article={article} />
          </div>
        ))}
      </>
    );
  }
}
