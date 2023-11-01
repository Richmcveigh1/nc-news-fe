import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getIndividualArticle, getComments } from "../../api";
import IndividualArticleCard from "./Individual-article-card";
import CommentContainer from "./Comment-container";
import CreateComment from "./Create-Comment";

export default function IndividualArticle() {
  const [singleArticle, setSingleArticle] = useState({});
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);
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
        <IndividualArticleCard article={singleArticle} />
        <h5>Comments</h5>
        <CreateComment
          comments={comments}
          setComments={setComments}
          article_id={article_id}
        />
        <CommentContainer
          comments={comments}
          setComments={setComments}
          article_id={article_id}
        />
      </div>
    );
  }
}
