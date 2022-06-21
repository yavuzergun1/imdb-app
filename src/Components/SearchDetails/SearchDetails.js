import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SRaddFavorites from "../Checkboxes/SRaddFavorites";

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
    return <p>...</p>;
  }

  return (
    <div>
      <img src={searchFilmDetail.Poster} alt="" />{" "}
      <Link to={`/${index}`}>
        <div className="sr-biography">
          <p>Biography</p>{" "}
        </div>
      </Link>
      <SRaddFavorites film={film} />
      <p>{searchFilmDetail.imdbRating}</p>
      <p> {searchFilmDetail.Year}</p>
      <p>{searchFilmDetail.Title} </p>
      <p>{searchFilmDetail.Plot} </p>
    </div>
  );
}

export default ImdbID;
