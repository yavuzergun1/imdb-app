import React from "react";
import { UseData } from "../Context/Context";

function AddFavorites({ film }) {
  const { favorites, setFavorites } = UseData();
  const addFavorite = () => {
    setFavorites([...favorites, film.imdbID]);
  };
  console.log(favorites);
  return (
    <div>
      <input type="checkbox" onChange={addFavorite} />
    </div>
  );
}

export default AddFavorites;
