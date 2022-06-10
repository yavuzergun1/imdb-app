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
    <nav>
      <div className="nav-first-container">
        <div className="link-container">
          <div className="logo">
          <img className="movie" src={require("../../Assets/MovieUP-Logo@3x.png" )}alt="" />
          <img className="up" src={require("../../Assets/up.png" )}alt="" />
          </div>
       
          
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
        </div>
      </div>
      
      <div className="nav-second-container">
        <form
          className="search-container"
          onSubmit={(e) => {
            e.preventDefault();
            setTitle(form);
            navigate("/searchresult");
          }}
        >
          <input
            id="input"
            placeholder="Title"
            onChange={(e) => setForm(e.target.value)}
          />
          <Link to="/searchresult">
            <button onClick={() => setTitle(form)}>search</button>
          </Link>
        </form>
      </div>
    </nav>
  );
}

export default Search;
