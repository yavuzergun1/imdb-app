import React, { useState } from "react";
import "./navBar.scss";
import { UseData } from "../../Context/Context";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Search() {
  const { setTitle } = UseData();
  const [form, setForm] = useState();
  const navigate = useNavigate();
  return (
    <nav className="header-main">
      <div className="nav-first-container">
        <div className="nav-link-container">
          <div className="logo">
            <img
              className="movie"
              src={require("../../Assets/MovieUP-Logo@3x.png")}
              alt=""
            />
            <img className="up" src={require("../../Assets/up.png")} alt="" />
          </div>
          <div className="nav-links">
            <Link className="home" to="/">
              Home
            </Link>
            <Link className="favorites" to="/favorites">
              Favorites
            </Link>
          </div>
        </div>
      </div>

      <div className="nav-second-container">
        <form
          className="nav-form"
          onSubmit={(e) => {
            e.preventDefault();
            setTitle(form);
            navigate("/searchresult");
          }}
        >
          <input
            className="nav-input"
            placeholder="Enter movie name here"
            onChange={(e) => setForm(e.target.value)}
          />

          <Link className="nav-search-img" to="/searchresult">
            <img
              src={require("../../Assets/search.png")}
              onClick={() => setTitle(form)}
            />
          </Link>
        </form>
      </div>
    </nav>
  );
}

export default Search;
