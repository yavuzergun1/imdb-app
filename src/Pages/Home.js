import React from "react";
import { Link, Outlet } from "react-router-dom";
import { UseData } from "../Context/Context";
import SearchResult from "./SearchResult";

function Home() {
  const { data } = UseData();
  console.log(data);
  return <div>
    <Link to="/SearchResult" >SearchResult</Link>
    <Outlet/>
  </div>;
}

export default Home;
