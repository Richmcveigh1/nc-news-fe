import { useEffect, useState } from "react";
import UserCard from "./User-card";
import { getUsers } from "../../api";

export default function UserPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  const userElement = users.map((user) => (
    <div   key={user.username}>
      <UserCard user={user} />
    </div>
  ));

  return (
    <div className="user-page">
      <h1>USER PAGE</h1>
      <div className="users-container">
      {userElement}
      </div>
    </div>
  );
}
