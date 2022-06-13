import React from "react";
import { UseData } from "../../Context/Context";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SelectYear from "./SelectYear";

function Header() {
  const { setTitle, setType } = UseData();
  const [form, setForm] = useState();
  const navigate = useNavigate();

  return (
    <header className="header-main-container">
      <img
        className="header-pic"
        src={require("../../Assets/placeholder.png")}
        alt=""
      />
      <img
        className="header-circle"
        src={require("../../Assets/circleElement.png")}
        alt=""
      />
      <div className="header-topic">
        <p className="welcome">Welcome to</p>
        <p className="movie">MovieUP.</p>
      </div>
      <p className="header-detail">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris
      </p>

      <div className="header-search-container">
        <form
          className="header-form"
          onSubmit={(e) => {
            e.preventDefault();
            setTitle(form);
            navigate("/searchresult");
          }}
        >
          {/* YEAR */}
          <SelectYear />
          {/* TYPE */}
          <select className="header-movies" onChange={(e) => setType(e.target.value)}>
            <option>Type</option>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
            <option value="episode">Episode</option>
          </select>
          {/* SEARCH */}
          <div className="header-text-container">
          <input
            className="header-input"
            placeholder="Enter movie name here"
            onChange={(e) => setForm(e.target.value)}
          />{" "}
            <img src={require("../../Assets/search.png")} alt="" />
          </div>
          
          <Link className="header-search-button" to="/searchresult">
            <button  onClick={() => setTitle(form)}>
              <p>Search</p>
              <img src={require("../../Assets/arrow-right 1.png")} />
              
            </button>
          </Link>
        </form>
      </div>
    </header>
  );
}

export default Header;
