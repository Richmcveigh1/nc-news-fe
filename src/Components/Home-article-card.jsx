import { Link } from "react-router-dom";

export default function HomeArticleCard({ article }) {

    const articleText = article.body.slice(0, 100) + '...';
    

    return (
      <div className="article-card">
        <img className="article-card-img"  src={article.article_img_url} alt={article.title}></img>
        <Link to={`/article/${article.article_id}`}>
      <h3 className="article-title">{article.title}</h3>
     </Link>
        <p className="article-body">{articleText}</p>
     
 
      </div>
    );
  }