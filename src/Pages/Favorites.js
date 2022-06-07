import React from "react";
import { useEffect } from "react";
import { UseData } from "../Context/Context";
import axios from "axios";

function Favorites() {
  const { favorites } = UseData();
  const key = process.env.REACT_APP_FILM_DATA;

  if (!favorites) {
    <p>Loading</p>;
  }
  console.log(favorites);
  return (
    <div>
      {favorites.map((favorite, index) => {
        return (
            <img key={index} src={favorite.Poster} alt="" />
        );
      })}
    </div>
  );
}

export default Favorites;
