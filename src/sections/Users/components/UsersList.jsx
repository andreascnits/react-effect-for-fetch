import React from "react";
import UsersListItem from "./UsersListItem";

function UsersList({ users }) {
  return (
    <ul className="users-list">
      {users.map((user, i) => (
        <UsersListItem key={user+i} user={user} />
      ))}
    </ul>
  );
}

export default UsersList;