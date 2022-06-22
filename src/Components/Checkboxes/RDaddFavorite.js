import React from "react";
import { UseData } from "../../Context/Context";
import { useState } from "react";
import "./rdAddFavorites.scss";
function RDaddFavorites() {
  const { favorites, setFavorites, filmId, filmDetail } = UseData();
  const [checked, setChecked] = useState(true);
  // console.log(favorites);

  const addFavorite = () => {
    setChecked(!checked);
    console.log("add çalıştı");
    if (
      favorites.map((favorite) => favorite.imdbID).includes(filmId) !== true
    ) {
      if (checked === true) {
        setFavorites([...favorites, filmDetail]);
      }
    }
  };

  const deleteFavorite = () => {
    setChecked(!checked);
    console.log("delete çalıştı");

    setFavorites(favorites.filter((item) => item.imdbID !== filmDetail.imdbID));
  };

  return (
    <div className={checked ? "unchecked-favs" : "checked-favs"}>
        <input
          id="rdAdd-heart"
          type="checkbox"
          onChange={!checked ? deleteFavorite : addFavorite}
        />
        <label className="rdAdd-label-heart">❤</label>
        <p className="add"> Add to Favorites </p>
        <p className="added"> Added to Favorites </p>
      </div>
  );
}

export default RDaddFavorites;