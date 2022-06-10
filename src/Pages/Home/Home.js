import React from "react";
import "./home.scss";
import { Link } from "react-router-dom";
import Search from "../../Components/Search";
import { UseData } from "../../Context/Context";
import Slider from "../../Components/Slider/Slider";

function Home() {
  const { data } = UseData();
  // console.log(data);

  if (!data) {
    return <p>loading</p>;
  }
  return (
    <div>
      <Search />
      <Link to="/favorites">Favorites</Link>
      <h1>Most Popular Films</h1>
      <div> <Slider/></div>
     
    </div>
  );
}

export default Home;
