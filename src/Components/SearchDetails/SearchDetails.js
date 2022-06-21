import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SRaddFavorites from "../Checkboxes/SRaddFavorites";
import "./searchDetails.scss"
function ImdbID({ film, index }) {
  const [searchFilmDetail, setSearchFilmDetail] = useState();

  const getData = async () => {
    const key = process.env.REACT_APP_FILM_DATA;
    try {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=${key}&i=${film.imdbID}`
      );
      console.log(data);
      setSearchFilmDetail(data);
    } catch (err) {}
  };

  useEffect(() => {
    film && getData();
    console.log(searchFilmDetail);
  }, [film]);

  if (!searchFilmDetail) {
    return <p>Film loading...</p>;
  }

  return (
    <div className="sd-results">
      <div className="sd-results">
        <img src={searchFilmDetail.Poster} alt="" />{" "}
        <Link to={`/${index}`}>
          <div className="sd-biography">
            <p>Biography</p>{" "}
          </div>
        </Link>
        <SRaddFavorites film={film} />
        <div className="imdb-container">
        <img className="imdb" src={require("../../Assets/IMDB-icon.png")} alt="" />
        <p className="sd-rating">{searchFilmDetail.imdbRating}</p>
        </div>
        
        <p className="sd-year"> {searchFilmDetail.Year}</p>
        <p className="sd-title">{searchFilmDetail.Title} </p>
        <p className="sd-plot">{searchFilmDetail.Plot} </p>
      </div>
    </div>
  );
}

export default ImdbID;
