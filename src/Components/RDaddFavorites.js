import React from 'react'
import { UseData } from '../Context/Context';
import { useState } from 'react';

function RDaddFavorites() {
    const { favorites, setFavorites, filmId } = UseData();
    const [checked, setChecked] = useState(true);
   console.log(favorites);
    const addFavorite = () => {
        setChecked(!checked);
        if (favorites.includes(filmId) !== true) {
          if (checked === true) {
            setFavorites([...favorites, filmId]);
          }
        }
      };
    
      const deleteFavorite = () => {
        setChecked(!checked);
        setFavorites(favorites.filter((item) => item !== filmId))
      }
  return (
    <div>
        <input
        type="checkbox"
        onChange={checked ? addFavorite : deleteFavorite}
      />
    </div>
  )
}

export default RDaddFavorites