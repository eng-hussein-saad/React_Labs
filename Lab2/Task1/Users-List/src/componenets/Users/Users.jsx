/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { usersData } from "../data/users";
import UserCard from "./UserCard";
export default function Users() {
  const [users, setUsers] = useState(usersData);
  const [mail, setMail] = useState();
  const [visibility, setVisibility] = useState(false);
  function Search(email) {
    setUsers(
      users.filter((user) => {
        return user.email == email;
      })
    );
    setVisibility(true);
  }
  function Reset() {
    setUsers(usersData);
    setVisibility(false);
  }
  return (
    <div className="container row row-cols-1 row-cols-md-3 g-4 mx-auto my-1">
      <div className="input-group flex-nowrap">
        <span className="input-group-text" id="addon-wrapping">
          @
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Email"
          aria-label="Username"
          aria-describedby="addon-wrapping"
          onChange={(e) => {
            setMail(e.target.value);
          }}
        />
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={() => {
            Search(mail);
          }}
        >
          Search
        </button>
        {visibility ? (
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              Reset();
            }}
          >
            Reset
          </button>
        ) : null}
      </div>
      {users.map((user) => (
        <div className="col" key={user.id}>
          <UserCard userItem={user} />
        </div>
      ))}
      {users.length == 0 && <p>This Email is not found</p>}
    </div>
  );
}
