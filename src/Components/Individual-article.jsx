import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getIndividualArticle, getComments } from "../../api";
import ArticleCard from "./Article-card";
import CommentContainer from "./Comment-container";

export default function IndividualArticle() {
  const [singleArticle, setSingleArticle] = useState({});

  const [loading, setLoading] = useState(false);
  const { article_id } = useParams();

  useEffect(() => {
    setLoading(true);
    getIndividualArticle(article_id).then((data) => {
      setLoading(false);
      setSingleArticle(data);
    });
  }, []);

  if (loading) return <p>Loading...</p>;
  else {
    return (
      <div>
        <ArticleCard article={singleArticle} />
        <h5>Comments</h5>
        <CommentContainer article_id={article_id} />
      </div>
    );
  }
}
