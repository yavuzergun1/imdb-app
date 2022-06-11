import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddFavorites from "../../Components/Checkboxes/SRaddFavorites";
import NavBar from "../../Components/NavBar/NavBar";
import { UseData } from "../../Context/Context";

function SearchResult() {
  const { data } = UseData();
  console.log(data);

  if (!data.Search) {
    return <p>Loading film data...</p>;
  }
  return (
    <div>
      <NavBar />
      {data.Search.map((film, index) => {
        return (
          <div key={`/${index}`}>
            <Link to={`/${index}`}>
              <img src={film.Poster} alt="" />{" "}
            </Link>
            {data.Search[index].imdbID}
            <AddFavorites film={film} />
          </div>
        );
      })}
      
    </div>
  );
}

export default SearchResult;
