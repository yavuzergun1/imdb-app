import React from "react";
import { UseData } from "../../Context/Context";
import { useState, useEffect } from "react";
import FavDeleteFavorites from "../../Components/Checkboxes/FavDeleteFavorites";
import NavBar from "../../Components/NavBar/NavBar";

function Favorites() {
  const { favorites } = UseData();
  const [localFavorites, setLocalFavorites] = useState([]);
  console.log(favorites);
  useEffect(() => {
    localStorage.setItem("localFavorites", JSON.stringify(favorites));
    setLocalFavorites(JSON.parse(localStorage.getItem("localFavorites")));
  }, [favorites]);

  if (!favorites) {
    <p>Loading</p>;
  }
  console.log(localFavorites);
  return (
    <div>
      <NavBar/>
      {localFavorites.map((favorite, index) => {
        return (
          <div key={index}>
            <img src={favorite.Poster} alt="" />
            <FavDeleteFavorites favorite={favorite} />
          </div>
        );
      })}
    </div>
  );
}

export default Favorites;