import { useEffect, useState } from "react";
import CommentCard from "./Comment-card";
import { getComments } from "../../api";

export default function CommentContainer ({comments, setComments, article_id}) {

  const [loadingComments, setLoadingComments] = useState(true)

    useEffect(() => {
        setLoadingComments(true)
        getComments(article_id).then((data) => {
          setComments(data);
        });
        setLoadingComments(false)
      }, []);
    
      const commentElement = comments.map((comment) => (
        <div key={comment.comment_id}>
          <CommentCard comment={comment} />
        </div>
      ));

      if (loadingComments) return ( <p>Loading the comments for you</p> )
      else {
      return (
        <>
       <h2>Comments</h2>
        {commentElement}
        </>
      )
      }
}