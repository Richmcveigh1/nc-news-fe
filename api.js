import axios from "axios";

const api = axios.create({
  baseURL: "https://rich-mcveigh-nc-news-web-service.onrender.com/api",
});

export const getUsers = () => {
  return api.get("/users").then(({data: {allUsers}}) => {
    return allUsers
  })
}

export const getArticles = () => {
  return api.get("/articles").then(({ data: { allArticles } }) => {
    return allArticles;
  });
};

export const sortArticles = (topic, category, order) => {
  return api.get(`/articles?topic=${topic}&sort_by=${category}&order=${order}`).then(({data: {allArticles}}) => {
    console.log("hello")
    return allArticles
  })
}

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

export const postComment = (article_id, newComment) => {
  return api.post(`/articles/${article_id}/comments`, newComment)
  .then(({data: {comment}}) => {
    return comment
  })
};

export const getArticlesByTopic = (topic) => {
  return api.get(`/articles?topic=${topic}`).then(({ data: { allArticles } }) => {
    return allArticles;
  });
};

export const getTopic = () => {
  return api.get("/topics").then(({ data: { topics } }) => {
    return topics;
  });
};
