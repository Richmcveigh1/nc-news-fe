import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getIndividualArticle } from "../../api";

export default function IndividualArticle() {
const [singleArticle, setSingleArticle] = useState({})
const { article_id } = useParams()


useEffect(() => {
    getIndividualArticle(article_id)
    .then((data) => {
        setSingleArticle(data)
    })
}, [setSingleArticle])

console.log(singleArticle)

const {title, topic, article_img_url, body, votes, author, created_at } = singleArticle

const date = (created_at) ? created_at.slice(0, 10): ""

return (
    <div>
<p>{date}</p>
<p>{topic}</p>
<h1>{title}</h1>
<p>{author}</p>
<img src={article_img_url}></img>
<p>{body}</p>
<p>votes: {votes}</p>
    </div>
)

}