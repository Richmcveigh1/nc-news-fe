import { useEffect, useState } from "react";
import CommentCard from "./Comment-card";
import { getComments } from "../../api";

export default function CommentContainer ({article_id}) {
    const [comments, setComments] = useState([]);

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

      return (
        <>
       <h2>Comments</h2>
        {commentElement}
        </>
      )
}