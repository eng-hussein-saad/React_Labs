/* eslint-disable react/prop-types */
import React from "react";
import "./Header.css";
import { Link } from "react-router";
function Header(props) {
  const { watchList } = props;
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand mx-5 fw-bold">
          Movie App
        </Link>
        <Link to="/Watchlist" className="navbar-brand mx-5">
          Watchlist{" "}
          <span className="badge text-bg-secondary">{watchList.length}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
