import React from "react";
import { useParams, Link } from "react-router-dom";
import { UseData } from "../Context/Context";
import { useEffect } from "react";
import AddFavorites from "../Components/RDaddFavorites";

function ResultDetail() {
  const { data, filmId, setFilmId, filmDetail} =
    UseData();
  const { id } = useParams();

  useEffect(() => {
    setFilmId(data.Search[id].imdbID);
  }, []);

  if (!filmDetail) {
    return <p>loading</p>;
  }
  return (
    <div>
      <Link to="/favorites">Favorites</Link>
      {filmId}
      <img src={filmDetail.Poster} alt="" />
      <AddFavorites />
      <p>{filmDetail.Plot} </p>
    </div>
  );
}

export default ResultDetail;
