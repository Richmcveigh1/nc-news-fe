import axios from "axios";

const api = axios.create({
  baseURL: "https://rich-mcveigh-nc-news-web-service.onrender.com/api",
});

export const getArticles = () => {
  return api.get("/articles").then(({ data: { allArticles } }) => {
    return allArticles;
  });
};

export const getIndividualArticle = (article_id) => {
  return api.get(`/articles/${article_id}`).then(({ data: { article } }) => {
    return article;
  });
};

export const updateArticleVotes = (article_id, newVote) => {
  return api
    .patch(`/articles/${article_id}`, { inc_votes: newVote })
    .then((res) => {
      return res.data;
    });
};

export const getComments = (article_id) => {
  return api
    .get(`/articles/${article_id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};

// export const updateCommentVotes = (comment_id, updatedVote) => {
//     return api.patch(`/comments/${comment_id}`
//     )
// }

export const postComment = (comment_id, newComment) => {
  return api.post("comments");
};

export const getArticlesByTopic = (topic) => {
  return api.get(`/articles?topic=${topic}`).then(({ data: { topics } }) => {
    return topics;
  });
};

export const getTopic = () => {
  return api.get("/topics").then(({ data: { topics } }) => {
    return topics;
  });
};
