import { useState } from "react";

export default function CommentCard({ comment }) {
  const { votes, created_at, author, body } = comment;
  const [voteCount, setVoteCount] = useState(votes);
  const [userVote, setUserVote] = useState(0);

  const handleUpvote = () => {
    if (userVote === 0) {
      setVoteCount(voteCount + 1);
      setUserVote(1);
    } else if (userVote === 1) {
      setVoteCount(voteCount - 1);
      setUserVote(0);
    } else {
      setVoteCount(voteCount + 2);
      setUserVote(1);
    }
  };

  const handleDownvote = () => {
    if (userVote === 0) {
      setVoteCount(voteCount - 1);
      setUserVote(-1);
    } else if (userVote === -1) {
      setVoteCount(voteCount + 1);
      setUserVote(0);
    } else {
      setVoteCount(voteCount - 2);
      setUserVote(-1);
    }
  };
  const date = created_at ? created_at.slice(0, 10) : "";

  return (
    <div className="comment-card">
      <p>{body}</p>
      <p>
        Commenter: {author} on {date}
      </p>
      <p>Votes: {voteCount}</p>
      <button
        onClick={handleUpvote}
        className={`vote-button ${
          userVote === 1 ? "highlighted-vote-button" : ""
        }`}
        aria-label="upvote"
      >
        👍
      </button>
      <button
        onClick={handleDownvote}
        className={`vote-button ${
          userVote === -1 ? "highlighted-vote-button" : ""
        }`}
        aria-label="downvote"
      >
        👎
      </button>
    </div>
  );
}
