import React from "react";
import "./home.scss";
import { Link } from "react-router-dom";
import Navbar from "../../Components/NavBar/NavBar";
import { UseData } from "../../Context/Context";
import Slider from "../../Components/Slider/Slider";
import Header from "../../Components/Header/Header";

function Home() {
  const { data } = UseData();
  // console.log(data);

  if (!data) {
    return <p>loading</p>;
  }
  return (
    <div className="home-main-container">
      <Navbar />
      <Header/>
      <h2>Most Popular Films</h2>
      <div> <Slider/></div>
     
    </div>
  );
}

export default Home;
