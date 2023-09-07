import { useState } from "react";
import { handleUpvote, handleDownvote } from "../../utils";

export default function CommentCard({ comment }) {
  const { votes, created_at, author, body } = comment;
  const [voteCount, setVoteCount] = useState(votes);
  const [userVote, setUserVote] = useState(0);

  const date = created_at ? created_at.slice(0, 10) : "";

  return (
    <div className="comment-card">
      <p>
        Commenter: {author} on {date}
      </p>
      <p>{body}</p>
      <p>Votes: {voteCount}</p>
    </div>
  );
}
