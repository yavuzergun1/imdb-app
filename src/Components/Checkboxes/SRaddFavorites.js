import React, { useState } from "react";
import { UseData } from "../../Context/Context";
import "./checkboxes.scss";
function SRaddFavorites({ film }) {
  const { favorites, setFavorites } = UseData();
  const [checked, setChecked] = useState(false);
  const addFavorite = () => {
    setChecked(checked);
    if (
      favorites.map((favorite) => favorite.imdbID).includes(film.imdbID) ==
      false
    ) {
      if (checked === false) {
        setFavorites([...favorites, film]);
      }
    }
  };

  const deleteFavorite = () => {
    setChecked(!checked);
    setFavorites(favorites.filter((item) => item.imdbID !== film.imdbID));
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

export default SRaddFavorites;
