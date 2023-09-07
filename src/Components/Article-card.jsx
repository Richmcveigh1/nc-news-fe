import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateArticleVotes } from "../../api";

export default function ArticleCard({ article }) {
  const {
    article_img_url,
    title,
    article_id,
    topic,
    author,
    body,
    votes,
    created_at,
  } = article;
  
  const date = created_at ? created_at.slice(0, 10) : "";
  
  const [voteCount, setVoteCount] = useState(votes);
  const [isClicked, SetIsClicked] = useState(0);
  // console.log(voteCount, "voteCount");

  const handleUpvote = (isClicked, SetIsClicked, voteCount, setVoteCount) => {
    if (isClicked === 0) {
      setVoteCount((currentVotes) => {
        return currentVotes + 1;
      });
      updateArticleVotes(article_id, 1).then(() => {
        SetIsClicked(1);
      });
    } else if (isClicked === 1) {
      setVoteCount((currentVotes) => {
        return currentVotes - 1;
      });
      updateArticleVotes(article_id, -1).then(() => {
        SetIsClicked(0);
      });
    } else {
      setVoteCount((currentVotes) => {
       
        return currentVotes + 2;
      });
      updateArticleVotes(article_id, +2).then(() => {
        SetIsClicked(1);
      });
    }
  };

  const handleDownvote = (isClicked, SetIsClicked, voteCount, setVoteCount) => {
    if (isClicked === 0) {
      setVoteCount((currentVotes) => {
        return currentVotes - 1;
      });
      updateArticleVotes(article_id, -1).then(() => {
        SetIsClicked(-1);
      });
    } else if (isClicked === -1) {
      setVoteCount((currentVotes) => {
        return currentVotes + 1;
      });
      updateArticleVotes(article_id, 1).then(() => {
        SetIsClicked(0);
      });
    } else {
      setVoteCount((currentVotes) => {
        return currentVotes - 2;
      });
      updateArticleVotes(article_id, -2).then(() => {
        SetIsClicked(-1);
      });
    }
  };

  return (
    <div className="article-card">
      <img className="article-card-img" src={article_img_url} alt={title}></img>
      <Link to={`/article/${article_id}`}>
        <h3 className="article-title">{title}</h3>
      </Link>
      <p className="article-topic">{topic}</p>
      <p className="article-author">
        by {author} on {date}
      </p>
      <p className="article-body">{body}</p>
      <p className="article-votes">votes: {voteCount} </p>
      <button
        onClick={() =>
          handleUpvote(isClicked, SetIsClicked, voteCount, setVoteCount)
        }
        className={`vote-button ${
          isClicked === 1 ? "highlighted-vote-button" : ""
        }`}
        aria-label="upvote"
      >
        👍 Like
      </button>
      <button
        onClick={() =>
          handleDownvote(isClicked, SetIsClicked, voteCount, setVoteCount)
        }
        className={`vote-button ${
          isClicked === -1 ? "highlighted-vote-button" : ""
        }`}
        aria-label="downvote"
      >
        👎 Dislike
      </button>
    </div>
  );
}
