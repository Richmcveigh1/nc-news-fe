import { postComment } from "../../api";
import { UserContext } from "../contexts/User-context";
import { useContext, useState } from "react";

export default function CreateComment({ comments, setComments, article_id }) {
  const { loggedInUser } = useContext(UserContext);
  const [posting, setPosting] = useState(false);
  const [error, setError] = useState(false)
  const [newComment, setNewComment] = useState({
    username: loggedInUser.username,
    body: "",
  });

  const formEntry = (e, key) => {
    return setNewComment((currComment) => {
      const newComment = { ...currComment };

      newComment[key] = e.target.value;
      return newComment;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false)
    setPosting(true);
    if (newComment.body !== "") {
      postComment(article_id, newComment)
        .then((postedComment) => {
          setPosting(false);
          setComments([postedComment, ...comments]);
          setNewComment({
            username: loggedInUser.username,
            body: "",
          });
        })
        .catch((err) => {
            setError(true)
          setPosting(false);

          return err;
        });
    }
  };

  return (
    <>
      {posting ? (
        <p>"Posting your comment"</p>
      ) : error ? (
        
        <p>It seems like you're offline. Try again when you reconnect.</p>
        
      ) : (
        <>
          <p>Add comment</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="new-comment"></label>
            <textarea
              id="new-comment"
              type="text"
              name="Type Comment Here"
              value={newComment.body}
              onChange={(e) => {
                formEntry(e, "body");
              }}
            />
            <br></br>
            <button>Post</button>
          </form>
        </>
      )}
    </>
  );
}
