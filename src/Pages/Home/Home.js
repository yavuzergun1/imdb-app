import React from "react";
import "./home.scss";
import Navbar from "../../Components/NavBar/NavBar";
import { UseData } from "../../Context/Context";
import Slider from "../../Components/Slider/Slider";
import Header from "../../Components/Header/Header";
import SearchPanel from "../../Components/SearchPanel/SearchPanel";
function Home() {
  const { data } = UseData();
  // console.log(data);

  if (!data) {
    return <p>loading</p>;
  }
  return (
    <div className="home-main-container">
      <Navbar />
      <Header />
      <SearchPanel/>
      <Slider />
    </div>
  );
}

export default Home;
