import React from "react";
import Navbar from "../../Components/NavBar/NavBar";
import Slider from "../../Components/Slider/Slider";
import Header from "../../Components/Header/Header";
import SearchPanel from "../../Components/SearchPanel/SearchPanel";
function Home() {
  return (
    <div className="home-main-container">
      <Navbar />
      <Header />
      <SearchPanel />
      <Slider />
    </div>
  );
}

export default Home;
