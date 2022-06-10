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
    <div>
      <input type="checkbox" onChange={deleteFavorite} checked={checked} />
    </div>
  );
}

export default FavDeleteFavorites;
