import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddFavorites from "../Components/SRaddFavorites";
import Search from "../Components/Search";
import { UseData } from "../Context/Context";

function SearchResult() {
  const { data } = UseData();
  const [localData, setLocalData] = useState();

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data.Search));
    setLocalData(JSON.parse(localStorage.getItem("data")));
  }, [])
  // console.log(localData);
  if (!localData) {
    return <p>loading</p>;
  }
  return (
    <div>
      <Link to="/favorites">Favorites</Link>
      SearchResulta geldinnnn
      {localData.map((film, index) => {
        return (
          <div key={`/${index}`}>
            <Link to={`/${index}`}>
              <img src={film.Poster} alt="" />{" "}
            </Link>
            {localData[index].imdbID}
            <AddFavorites film={film} />
          </div>
        );
      })}
      <Search />
    </div>
  );
}

export default SearchResult;
