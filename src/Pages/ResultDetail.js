import React from "react";
import { useParams } from "react-router-dom";
import { UseData } from "../Context/Context";
import { useEffect } from "react";

function ResultDetail() {
  const { data, setFilmId, filmDetail } = UseData();
  const { id } = useParams();
  // console.log(filmDetail);

  useEffect(() => {
    setFilmId(data.Search[id].imdbID)
  }, []);
  
  
  if (!filmDetail) {
    return <p>loading</p>;
  }
  return (
    <div>
      ResultDetail:
      <img src={filmDetail.Poster} alt="" />
      <p>{filmDetail.Plot} </p>
    </div>
  );
}

export default ResultDetail;
