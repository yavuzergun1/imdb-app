import React, { useState } from "react";
import { UseData } from "../../Context/Context";
import {FaRegHeart} from "react-icons/fa";
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
  console.log(favorites);
  return (
    <div className="checkbox-main">
      <input id="heart" type="checkbox" onChange={addFavorite} />
      <label className="label-heart">
        <FaRegHeart />
      </label>
    </div>
  );
}

export default SRaddFavorites;
