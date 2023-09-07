import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getIndividualArticle, getComments } from "../../api";
import CommentCard from "./Comment-card";
import ArticleCard from "./Article-card";

export default function IndividualArticle() {
  const [singleArticle, setSingleArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const { article_id } = useParams();

  useEffect(() => {
    setLoading(true);
    getIndividualArticle(article_id).then((data) => {
      setLoading(false);
      setSingleArticle(data);
    });
  }, []);

  useEffect(() => {
    getComments(article_id).then((data) => {
      setComments(data);
    });
  }, []);

  const commentElement = comments.map((comment) => (
    <div key={comment.comment_id}>
      <CommentCard comment={comment} />
    </div>
  ));

  if (loading) return <p>Loading...</p>;
  else {
    return (
      <div>
        <ArticleCard article={singleArticle} />
        <h5>Comments</h5>
        {commentElement}
      </div>
    );
  }
}
