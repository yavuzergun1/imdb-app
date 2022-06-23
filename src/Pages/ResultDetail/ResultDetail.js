import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { UseData } from "../../Context/Context";
import { useEffect } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import RDaddFavorite from "../../Components/Checkboxes/RDaddFavorite";
import "./resultDetail.scss";
// import FavDeleteFavorites from "../../Components/Checkboxes/DeleteFavorite";
import RDdeleteFavorite from "../../Components/Checkboxes/RDdeleteFavorite";

function ResultDetail() {
  const { data, filmId, setFilmId, filmDetail, favorites } = UseData();
  const { id } = useParams();

  useEffect(() => {
    setFilmId(data[id].imdbID);
  }, []);
  console.log(filmDetail);

  let isFavorite = false;
  favorites.forEach((favorite) => {
    if (favorite.imdbID == filmDetail.imdbID) {
      isFavorite = true;
    }
  });
  let heart = <RDaddFavorite filmDetail={filmDetail} />;
  if (isFavorite) {
    heart = <RDdeleteFavorite filmDetail={filmDetail}/>;
  }
  if (!filmDetail) {
    return <p>Loading Film Data...</p>;
  }
  return (
    <div className="rd-main">
      <div className="sr-navbar">
        {" "}
        <NavBar />{" "}
      </div>
      <div className="sr-nav">
        <div className="half-container">
          <div className="in-container">
            <span className="sr-home">Home /</span>
            <span className="sr-results"> {filmDetail.Title} </span>
          </div>
        </div>
      </div>
      <div className="detail-container">
        <div className="rd-poster">
          <img className="rd-poster" src={filmDetail.Poster} alt="" />
        </div>
        <div className="detail">
          <span>Rating</span>
          <div className="rd-first">
            <div className="imdb-cont">
              <img src={require("../../Assets/IMDB-icon.png")} alt="" />
              <p>{filmDetail.imdbRating} </p>
            </div>
            {/* <RDaddFavorite /> */}
            {heart}
          </div>
          <div className="rd-second">
            <p className="rd-sum">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
              tempora commodi repellat odit minima repudiandae et dolores
              debitis aut maiores labore sint accusamus delectus ab saepe quam
              autem similique optio nihil, enim esse itaque ipsum laborum.
              Voluptatibus quod, corrupti laboriosam at soluta, architecto non a
              maiores facilis sed dolores reiciendis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultDetail;
