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
      setSearchFilmDetail(data);
    } catch (err) {}
  };

  useEffect(() => {
    film && getData();
  }, [film]);

  if (!searchFilmDetail) {
    return <p>Film loading...</p>;
  }

  return (
    <div className="results">
      <div className="results">
        <img src={searchFilmDetail.Poster} alt="" />{" "}
        <Link to={`/${index}`}>
          <div className="biography">
            <p>Biography</p>{" "}
          </div>
        </Link>
        <SRaddFavorites film={searchFilmDetail} />
        <div className="imdb-container">
        <img className="imdb" src={require("../../Assets/IMDB-icon.png")} alt="" />
        <p className="rating">{searchFilmDetail.imdbRating}</p>
        </div>
        
        <p className="year"> {searchFilmDetail.Year}</p>
        <p className="title">{searchFilmDetail.Title} </p>
        <p className="plot">{searchFilmDetail.Plot} </p>
      </div>
    </div>
  );
}

export default ImdbID;
