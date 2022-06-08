import React, { useState } from "react";
import { UseData } from "../Context/Context";

function SRaddFavorites({ film }) {
  const { favorites, setFavorites } = UseData();
  const [checked, setChecked] = useState(true);
  const addFavorite = () => {
    setChecked(!checked);
    if (
      favorites.map((favorite) => favorite.imdbID).includes(film.imdbID) ==
      false
    ) {
      if (checked === true) {
        setFavorites([...favorites, film]);
      }
    }
  };

  const deleteFavorite = () => {
    setChecked(!checked);
    setFavorites(favorites.filter((item) => item.imdbID !== film.imdbID));
  };

  return (
    <div>
      <input
        type="checkbox"
        onChange={checked ? addFavorite : deleteFavorite}
      />
    </div>
  );
}

export default SRaddFavorites;
