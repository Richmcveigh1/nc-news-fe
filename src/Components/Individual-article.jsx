import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getIndividualArticle, getComments } from "../../api";
import CommentCard from "./Comment-card";

export default function IndividualArticle() {
const [singleArticle, setSingleArticle] = useState({})
const [comments, setComments] = useState([])
const { article_id } = useParams()


useEffect(() => {
    getIndividualArticle(article_id)
    .then((data) => {
        setSingleArticle(data)
    })
}, [setSingleArticle])

useEffect(() => {
    getComments(article_id)
    .then((data) => {
        setComments(data)
    })
}, [setComments])



const {title, topic, article_img_url, body, votes, author, created_at } = singleArticle

const date = (created_at) ? created_at.slice(0, 10): ""

const commentElement = comments.map((comment) => (
    <div key={comment.comment_id}>
<CommentCard comment={ comment }/>
    </div>
))

return (
    <div>
<p>{date}</p>
<p>{topic}</p>
<h1>{title}</h1>
<p>{author}</p>
<img src={article_img_url}></img>
<p>{body}</p>
<p>votes: {votes}</p>
<h5>Comments</h5>
{commentElement}
    </div>
)

}