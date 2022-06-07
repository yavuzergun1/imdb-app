import React, { useState } from "react";
import { UseData } from "../Context/Context";

function AddFavorites({ film }) {
  const { favorites, setFavorites, filmId } = UseData();
  const [checked, setChecked] = useState(true);
  const addFavorite = () => {
    setChecked(!checked);
    if (favorites.includes(film.imdbID, filmId) !== true) {
      if (checked === true) {
        setFavorites([...favorites, film.imdbID]);
      }
    }
  };

  const deleteFavorite = () => {
    setChecked(!checked);
    setFavorites(favorites.filter((item) => item !== film.imdbID));
  };



  console.log(favorites);
  return (
    <div>
      <input
        type="checkbox"
        onChange={checked ? addFavorite : deleteFavorite}
      />
    </div>
  );
}

export default AddFavorites;
