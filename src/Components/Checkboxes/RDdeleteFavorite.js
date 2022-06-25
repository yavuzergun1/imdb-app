import React from "react";
import { FaHeart } from "react-icons/fa";
import { UseData } from "../../Context/Context";
import "./RDcheckboxes.scss";

function RDdeleteFavorite({ filmDetail }) {
  const { favorites, setFavorites } = UseData();

  const deleteFavorite = () => {
    setFavorites(favorites.filter((item) => item.imdbID !== filmDetail.imdbID));
    console.log("delete çalıştı");
  };

  return (
    <div className="checked-favs">
      <input id="rdAdd-heart" type="checkbox" onChange={deleteFavorite} />
      <label className="rdDelete-label-heart">
        <FaHeart />
      </label>
      <p className="added"> Added to Favorites </p>
    </div>
  );
}

export default RDdeleteFavorite;
