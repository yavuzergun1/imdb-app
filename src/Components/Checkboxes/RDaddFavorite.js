import React from "react";
import { UseData } from "../../Context/Context";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import "./RDcheckboxes.scss";
function RDaddFavorites() {
  const { favorites, setFavorites, filmId, filmDetail } = UseData();
  const [checked, setChecked] = useState(true);
// favoriler kısmındaki filmlerin hepsi işaretli olması gerektiği için useState'e true değeri verildi
  const addFavorite = () => {
    setChecked(!checked);
    console.log("add çalıştı");
    if (
      favorites.map((favorite) => favorite.imdbID).includes(filmId) !== true
    ) {
      if (checked === true) {
        setFavorites([...favorites, filmDetail]);
      }
    }
  };

  return (
    <div className="unchecked-favs">
      <input id="rdAdd-heart" type="checkbox" onChange={addFavorite} />
      <label className="rdAdd-label-heart">
        <FaRegHeart />
      </label>
      <p className="add"> Add to Favorites </p>
    </div>
  );
}

export default RDaddFavorites;
