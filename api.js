import axios from "axios";

const api = axios.create({
    baseURL: 'https://rich-mcveigh-nc-news-web-service.onrender.com/api'
})

export const getArticles = () => {
  return api.get('/articles')
    .then(({ data: { allArticles } }) => {
      return allArticles;
    });
};

export const getIndividualArticle = (article_id) => {
  return api.get(
      `/articles/${article_id}`
    )
    .then(({ data: { article } }) => {
      return article;
    });
};

export const getComments = (article_id) => {
  return api.get(
      `/articles/${article_id}/comments`
    )
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const getTopic = () => {
  return api.get('/topics')
    .then(({ data: { topics } }) => {
      return topics;
    });
};
