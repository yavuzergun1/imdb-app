import React from "react";
import { UseData } from "../../Context/Context";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SelectYear from "./SelectYear";
function SearchPanel() {
  const { setTitle, setType } = UseData();
  const [form, setForm] = useState();
  const [selected, setSelected]= useState();
  const navigate = useNavigate();
  return (
    <div className="search-main">
      <div className="header-search-container">
        <form
          className="header-form"
          onSubmit={(e) => {
            e.preventDefault();
            setTitle(form);
            navigate("/searchresult");
          }}
        >
          <div className="header-select">
            <SelectYear />
            <img
              className="button-chevron"
              src={require("../../Assets/chevron.png")}
            />
            <select
              className="header-movies"
              onChange={(e) => setSelected(e.target.value)}
              onClick={(e) => setType(selected)}

            >
              <option>Type</option>
              <option value="movie">Movie</option>
              <option value="series">Series</option>
              <option value="episode">Episode</option>
            </select>
            <img
              className="button-chevron"
              src={require("../../Assets/chevron.png")}
            />
          </div>

          <div className="header-text-container">
            <input
              className="header-input"
              placeholder="Enter movie name here"
              onChange={(e) => e.target.value && setForm(e.target.value)}
            />{" "}
             <Link className="" to="/searchresult"> 
            <img className="header-search-icon" src={require("../../Assets/search.png")} alt="" />
            </Link>
          </div>

          <Link className="header-search-button" to="/searchresult">
            <button onClick={() => setTitle(form)}>
              <p>Search</p>
              <img src={require("../../Assets/arrow-right 1.png")} />
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SearchPanel;
