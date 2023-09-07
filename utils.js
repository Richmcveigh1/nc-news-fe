export const handleUpvote = (userVote, setUserVote, voteCount, setVoteCount) => {
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

  export const handleDownvote = (userVote, setUserVote, voteCount, setVoteCount) => {
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