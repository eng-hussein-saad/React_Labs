/* eslint-disable react/prop-types */
import React from "react";
export default function UserCard(props) {
  return (
    <div className="card">
      <img
        src="../../../public/Images/pp.webp"
        className="card-img-top"
        alt="..."
      ></img>
      <div className="card-body">
        <h5 className="card-title">
          {props.userItem.firstName} {props.userItem.lastName}
        </h5>
        <p className="card-text">email = {props.userItem.email}</p>
        <p className="card-text">Phone = {props.userItem.phone}</p>
        {props.userItem.age < 35 ? (
          <p>
            {" "}
            Verification according to age being less than 35:{" "}
            <i className="fa-solid fa-x" style={{ color: "#ff0000" }} />
          </p>
        ) : (
          <p>
            Verification according to age being less than 35:{" "}
            <i className="fa-solid fa-check" style={{ color: "#63E6BE" }} />
          </p>
        )}
      </div>
    </div>
  );
}
