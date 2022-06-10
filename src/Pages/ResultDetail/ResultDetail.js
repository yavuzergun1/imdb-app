import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { UseData } from "../../Context/Context";
import { useEffect } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import AddFavorites from "../../Components/Checkboxes/RDaddFavorites";

function ResultDetail() {
  const { data, filmId, setFilmId, filmDetail } = UseData();
  const { id } = useParams();
  const [localFilmDetail, setLocalFilmDetail] = useState();
  console.log(filmDetail);
  useEffect(() => {
    setFilmId(data.Search[id].imdbID);
  }, [data]);
  console.log(filmDetail);

  useEffect(() => {
    filmDetail &&
      localStorage.setItem("localFilmDetail", JSON.stringify(filmDetail));
    setLocalFilmDetail(JSON.parse(localStorage.getItem("localFilmDetail")));
    console.log(filmDetail);
  }, [filmDetail]);
  console.log(localFilmDetail);

  if (!localFilmDetail) {
    return <p>loading</p>;
  }
  return (
    <div>
      <NavBar />
      <div>
        {" "}
        {filmId}
        <img src={localFilmDetail.Poster} alt="" />
      </div>

      <AddFavorites />
      <p>{localFilmDetail.Plot} </p>
    </div>
  );
}

export default ResultDetail;