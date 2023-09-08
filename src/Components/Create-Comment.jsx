import { postComment } from "../../api";
import { UserContext } from "../contexts/User-context";
import { useContext, useState } from "react";

export default function CreateComment({comments, setComments, article_id}) {
  const { loggedInUser } = useContext(UserContext);
  const [posting, setPosting] = useState(false);
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
    setPosting(true);
    if (newComment.body !== "") {
      postComment(article_id, newComment).then((postedComment) => {
        setPosting(false);
        setComments([postedComment, ...comments])
        setNewComment({
            username: loggedInUser.username,
            body: "",
        });
    });
    }
  };

  if (posting) return <p>"Posting your comment"</p>;
  else {
    return (
      <>
        <h1>post comment</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="new-comment"></label>
          <input
            id="new-comment"
            type="text"
            name="Type Comment Here"
            value={newComment.body}
            onChange={(e) => {
              formEntry(e, "body");
            }}
          />
          <button>Post Comment</button>
        </form>
      </>
    );
  }
}
