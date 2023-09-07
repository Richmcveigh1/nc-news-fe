import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getIndividualArticle, getComments } from "../../api";
import CommentCard from "./Comment-card";
import ArticleCard from "./Article-card";

export default function IndividualArticle() {
  const [singleArticle, setSingleArticle] = useState({});
  const [comments, setComments] = useState([]);


  const { article_id } = useParams();

  useEffect(() => {
    getIndividualArticle(article_id).then((data) => {
      setSingleArticle(data);

    });
  }, [setSingleArticle]);

  useEffect(() => {
    getComments(article_id).then((data) => {
      setComments(data);
    });
  }, [setComments]);


  const commentElement = comments.map((comment) => (
    <div key={comment.comment_id}>
      <CommentCard comment={comment} />
    </div>
  ));

  return (
    <div>
      <ArticleCard article={singleArticle } />
      <h5>Comments</h5>
      {commentElement}
    </div>
  );
}
