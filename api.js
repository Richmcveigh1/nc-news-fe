import axios from "axios";

export const getArticles = () => {
    return axios.get('https://rich-mcveigh-nc-news-web-service.onrender.com/api/articles')
        .then(({data: {allArticles}}) => {
            return allArticles
        })
}

export const getTopic = () => {
    return axios.get('https://rich-mcveigh-nc-news-web-service.onrender.com/api/topics')
    .then(({data: {topics}}) => {
        return topics
    })
}

export const getIndividualArticle = (article_id) => {
    return axios.get(`https://rich-mcveigh-nc-news-web-service.onrender.com/api/articles/${article_id}`)
    .then(({data: {article}}) => {
        return article
    })
}

