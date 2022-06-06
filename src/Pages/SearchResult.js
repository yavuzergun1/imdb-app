import React from "react";
import { Link } from "react-router-dom";
import Search from "../Components/Search";
import { UseData } from "../Context/Context";

function SearchResult() {
  const { data } = UseData();
  console.log(data);
  if (!data.Search) {
    return <p>loading</p>;
  }
  return (
    <div>
      SearchResulta geldinnnn
      {data.Search.map((film, index)=>{
        return(
<Link key={`/${index}`} to={`/${index}`}><img src={film.Poster} alt="" /> </Link>
        )
      })
      }
      
      {data.Type}
      <Search />
    </div>
  );
}

export default SearchResult;
