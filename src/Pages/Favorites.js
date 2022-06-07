import React from "react";
import { UseData } from "../Context/Context";

function Favorites() {
  const { favorites } = UseData();

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
