// import { useState, useEffect } from "react";

export default function ArticleCard({ article }) {
  return (
    <div className="article-card">
      <img className="article-card-img"  src={article.article_img_url} alt={article.title}></img>
      <h3 className="article-title">{article.title}</h3>
      <p className= 'article-topic'>{article.topic}</p>
      <p className="article-author">by {article.author}</p>
      <p className="article-body">{article.body}</p>
   
    </div>
  );
}
