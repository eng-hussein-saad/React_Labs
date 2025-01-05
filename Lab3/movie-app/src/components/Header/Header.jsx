/* eslint-disable react/prop-types */
import React from "react";
import "./Header.css";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
function Header() {
  const watchListData = useSelector((state) => state.watchList.value);
  const dispatch = useDispatch();
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand mx-5 fw-bold">
          Movie App
        </Link>
        <Link to="/Watchlist" className="navbar-brand mx-5">
          Watchlist{" "}
          <span className="badge text-bg-secondary">
            {watchListData.length}
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
