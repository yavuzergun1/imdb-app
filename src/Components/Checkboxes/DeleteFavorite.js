import React from "react";
import { useState } from "react";
import { UseData } from "../../Context/Context";

function FavDeleteFavorites({ favorite }) {
  const { favorites, setFavorites } = UseData();
  const [checked, setChecked] = useState(true);

  const deleteFavorite = () => {
    setFavorites(favorites.filter((item) => item.imdbID !== favorite.imdbID));
  };
  return (
    <div className="checkbox-main">
      <input
        id="heart"
        type="checkbox"
        onChange={deleteFavorite}
        checked={checked}
      />
      <label className="label-heart">
        <span>❤</span>{" "}
      </label>
    </div>
  );
}

export default FavDeleteFavorites;
