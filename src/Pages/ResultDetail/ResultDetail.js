import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { UseData } from "../../Context/Context";
import { useEffect } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import AddFavorites from "../../Components/Checkboxes/RDaddFavorites";

function ResultDetail() {
  const { data, filmId, setFilmId, filmDetail } = UseData();
  const { id } = useParams();


  useEffect(() => {
    setFilmId(data[id].imdbID);
  }, []);
  console.log(filmDetail);

  if (!filmDetail) {
    return <p>Loading Film Data...</p>;
  }
  return (
    <div>
      <NavBar />
      <div>
        {" "}
        {filmId}
        <img src={filmDetail.Poster} alt="" />
      </div>

      <AddFavorites />
      <p>{filmDetail.Plot} </p>
    </div>
  );
}

export default ResultDetail;
