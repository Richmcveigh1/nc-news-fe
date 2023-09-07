export default function UserCard ({user}) {

    const {username, name, avatar_url} = user
    return (
        <div className="user-card">
     
        <p>{username}</p>
        <img src={avatar_url} alt={`${username}'s profile picture`}></img>
        </ div>
    )
}