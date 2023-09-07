import { Link } from "react-router-dom";
import { useState } from "react";
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
  const [voteCount, setVoteCount] = useState(votes);
  const [userVote, setUserVote] = useState(0);
console.log(voteCount)
  const date = created_at ? created_at.slice(0, 10) : "";

  const handleUpvote = (userVote, setUserVote, voteCount, setVoteCount) => {
    if (userVote === 0) {
      updateArticleVotes(article_id, 1).then((updatedArticle) => {
        setVoteCount(updatedArticle.votes);

        setUserVote(1);
      });
    } else if (userVote === 1) {
      updateArticleVotes(article_id, -1).then((updatedArticle) => {
        setVoteCount(updatedArticle.votes);
        setUserVote(0);
      });
    } else {
      updateArticleVotes(article_id, 2).then((updatedArticle) => {
        setVoteCount(updatedArticle.votes);
        setUserVote(-1);
      });
    }
  };

  const handleDownvote = (userVote, setUserVote, voteCount, setVoteCount) => {
    if (userVote === 0) {
      updateArticleVotes(article_id, -1).then((updatedArticle) => {
        setVoteCount(updatedArticle.votes);

        setUserVote(-1);
      });
    } else if (userVote === -1) {
      updateArticleVotes(article_id, 1).then((updatedArticle) => {
        setVoteCount(updatedArticle.votes);
        setUserVote(0);
      });
    } else {
      updateArticleVotes(article_id, -2).then((updatedArticle) => {
        setVoteCount(updatedArticle.votes);
        setUserVote(-1);
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
          handleUpvote(userVote, setUserVote, voteCount, setVoteCount)
        }
        className={`vote-button ${
          userVote === 1 ? "highlighted-vote-button" : ""
        }`}
        aria-label="upvote"
      >
        👍 Like
      </button>
      <button
        onClick={() =>
          handleDownvote(userVote, setUserVote, voteCount, setVoteCount)
        }
        className={`vote-button ${
          userVote === -1 ? "highlighted-vote-button" : ""
        }`}
        aria-label="downvote"
      >
        👎 Dislike
      </button>
    </div>
  );
}
