import React, { useState } from "react";
import { UseData } from "../Context/Context";

function AddFavorites({ film }) {
  const { favorites, setFavorites } = UseData();
  const [checked, setChecked]= useState(true);

  const addFavorite = () => {
      setChecked(!checked)
      console.log(checked);
    if (favorites.includes(film.imdbID) !== true) {
     if(checked===true){ setFavorites([...favorites, film.imdbID])} 
    }
  };

  const deleteFavorite = ()=>{
      setChecked(!checked)
    setFavorites(favorites.filter(item=>item!==film.imdbID))
  }

  console.log(favorites);
  return (
    <div>
      <input type="checkbox" onChange={checked ? addFavorite : deleteFavorite}  />
    </div>
  );
}

export default AddFavorites;
