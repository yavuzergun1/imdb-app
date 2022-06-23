import React from "react";
import { useState } from "react";
import { UseData } from "../../Context/Context";
import "./rdAddFavorites.scss"
  

function RDdeleteFavorite({filmDetail}) {
    const { favorites, setFavorites } = UseData();
    const [checked, setChecked] = useState();

    const deleteFavorite = () => {
        setFavorites(favorites.filter((item) => item.imdbID !== filmDetail.imdbID));
        console.log("delete çalıştı");
      };

  return (
    <div className="checked-favs">
      <input
        id="heart"
        type="checkbox"
        onChange={deleteFavorite}
        checked={checked}
      />
            <label className="rdAdd-label-heart" ><span>❤</span> </label>
            <p className="added"> Added to Favorites </p>

    </div>
  )
}

export default RDdeleteFavorite