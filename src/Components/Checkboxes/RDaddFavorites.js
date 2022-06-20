import React from "react";
import { UseData } from "../../Context/Context";
import { useState } from "react";
import "./checkboxes.scss";
function RDaddFavorites() {
  const { favorites, setFavorites, filmId, filmDetail } = UseData();
  const [checked, setChecked] = useState(true);
  // console.log(favorites);

  const addFavorite = () => {
    setChecked(!checked);
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
    setFavorites(favorites.filter((item) => item.imdbID !== filmDetail.imdbID));
  };
  
  return (
    <div className="checkbox-main">
    <input
      id="heart"
      type="checkbox"
      onChange={!checked ? addFavorite : deleteFavorite}
    />
    <label className="label-heart" ><span>❤</span> </label>
  </div>
  );
}

export default RDaddFavorites;
