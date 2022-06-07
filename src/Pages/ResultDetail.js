import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { UseData } from "../Context/Context";
import { useEffect } from "react";
import AddFavorites from "../Components/RDaddFavorites";

function ResultDetail() {
  const { data, filmId, setFilmId, filmDetail} =UseData();
  const { id } = useParams();
  const [localFilmDetail, setLocalFilmDetail]=useState();
console.log(filmDetail);
  useEffect(() => {
    setFilmId(data.Search[id].imdbID);
  }, [data]);

  useEffect(() => {
    localStorage.setItem("filmDetail", JSON.stringify(filmDetail));
    setLocalFilmDetail(JSON.parse (localStorage.getItem("filmDetail")));
    console.log(localFilmDetail);
  }, [filmDetail]);
  if (!localFilmDetail) {
    return <p>loading</p>;
  }
  return (
    <div>
      <Link to="/favorites">Favorites</Link>
      {/* {filmId} */}
      <img src={localFilmDetail.Poster} alt="" />
      <AddFavorites />
      <p>{localFilmDetail.Plot} </p>
    </div>
  );
}

export default ResultDetail;
