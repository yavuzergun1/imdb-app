import React from "react";
import { Link } from "react-router-dom";
import Search from "../Components/Search";
import { UseData } from "../Context/Context";

function SearchResult() {
  const { data } = UseData();
  console.log(data);
  if (!data) {
    return <p>loading</p>;
  }
  return (
    <div>
      SearchResulta geldinnnn
      <Link to="ResultDetail">Detail</Link>
      {data.Type}
      <Search />
    </div>
  );
}

export default SearchResult;
