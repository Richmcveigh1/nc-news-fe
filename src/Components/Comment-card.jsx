export default function CommentCard ({comment}) {
const {votes, created_at, author, body} = comment

const date = (created_at) ? created_at.slice(0, 10): ""

   return (
<div className="comment-card">
    <p>{body}</p>
    <p>Commenter: {author} on {date}</p>
    <p>Votes: {votes}</p>
</div>
    
   )
}