/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import LanguageContext from "../../context/language";

function Header() {
  const { lang, setLang } = useContext(LanguageContext);
  const watchListData = useSelector((state) => state.watchList.value);
  const dispatch = useDispatch();
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand mx-5 fw-bold">
          Movie App
        </Link>
        <div className="d-flex ms-auto">
          <Link to="/Register" className="navbar-brand mx-5">
            Register
          </Link>
          <Link to="/Watchlist" className="navbar-brand mx-5">
            Watchlist{" "}
            <span className="badge text-bg-secondary">
              {watchListData.length}
            </span>
          </Link>
          <div className="dropdown">
            <a
              className="btn btn-secondary dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Language
            </a>
            <ul className="dropdown-menu">
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => {
                    setLang("en");
                  }}
                >
                  English
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => {
                    setLang("ar");
                    
                  }}
                >
                  Arabic
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
