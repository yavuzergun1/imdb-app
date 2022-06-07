import React from "react";
import { Link } from "react-router-dom";
import AddFavorites from "../Components/SRaddFavorites";
import Search from "../Components/Search";
import { UseData } from "../Context/Context";

function SearchResult() {
  const { data } = UseData();
  if (!data.Search) {
    return <p>loading</p>;
  }
  return (
    <div>
      SearchResulta geldinnnn
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
      <Search />
    </div>
  );
}

export default SearchResult;
