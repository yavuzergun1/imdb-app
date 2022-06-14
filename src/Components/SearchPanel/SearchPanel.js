import React from "react";
import { UseData } from "../../Context/Context";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SelectYear from "./SelectYear";
function SearchPanel() {
  const { setTitle, setType } = UseData();
  const [form, setForm] = useState();
  const navigate = useNavigate();
  return (
    <div>
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
              onChange={(e) => setType(e.target.value)}
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
            <img src={require("../../Assets/search.png")} alt="" />
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
