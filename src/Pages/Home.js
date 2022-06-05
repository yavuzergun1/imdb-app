import React from "react";
import { Link } from "react-router-dom";
import Search from "../Components/Search";
import { UseData } from "../Context/Context";

function Home() {
  const { data, title } = UseData();
  console.log(data);

  if (!data) {
    return <p>loading</p>;
  }
  return (
    <div>
      <Search />
      <Link to="/searchresult">SearchResult</Link>
      Title: {data.Title}
    </div>
  );
}

export default Home;
