import React from "react";
import { Link } from "react-router-dom";
import Search from "../Components/Search";
import { UseData } from "../Context/Context";

function Home() {
  const { data } = UseData();
  // console.log(data);

  if (!data) {
    return <p>loading</p>;
  }
  return (
    <div>
      <Search />
     
   <Link to="/favorites" >Favorites</Link>
    </div>
  );
}

export default Home;
