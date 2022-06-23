import React from "react";
import { UseData } from "../../Context/Context";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DeleteFavorite from "../../Components/Checkboxes/DeleteFavorite";
import NavBar from "../../Components/NavBar/NavBar";
import "./favorites.scss";
function Favorites() {
  const { favorites, filmId, setFilmId } = UseData();
  const [localFavorites, setLocalFavorites] = useState([]);
  console.log(favorites);
  useEffect(() => {
    localStorage.setItem("localFavorites", JSON.stringify(favorites));
    setLocalFavorites(JSON.parse(localStorage.getItem("localFavorites")));
  }, [favorites]);

  // useEffect(() => {
  //   setFilmId(localFavorites.imdbID);
  // }, [favorites]);
  // console.log(filmId);

  // const getImdbId= ()=>{
  //   console.log(favorite.imdbID);
  // }

  if (!favorites) {
    <p>Loading</p>;
  }
  return (
    <div>
      <div className="sr-nav-main fav-nav">
        <NavBar />
      </div>
      <div className="sr-nav">
        <div className="half-container">
          <div className="in-container">
            <span className="sr-home">Home /</span>
            <span className="sr-results"> Favorites</span>
          </div>
        </div>
      </div>
      <section className="fav-main search-result">
        <div className="favs-container films-container">
          {localFavorites.map((favorite, index) => {
            return (
              <div className="fav-film results" key={index}>
                <img src={favorite.Poster} alt="" />
                
                <Link to={`./${favorite.imdbID}`}>
                  <div className="biography" >
                    <p>Biography</p>{" "}
                  </div>
                </Link>
                <DeleteFavorite favorite={favorite} />
                <div className="imdb-container">
                  <img
                    className="imdb"
                    src={require("../../Assets/IMDB-icon.png")}
                    alt=""
                  />
                  <p className="rating">{favorite.imdbRating}</p>
                </div>

                <p className="year"> {favorite.Year}</p>
                <p className="title">{favorite.Title} </p>
                <p className="plot">{favorite.Plot} </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Favorites;
