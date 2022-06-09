import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataProvider } from "../Context/Context";
import Data from "../Data/Data";
import Home from "../Pages/Home/Home";
import ResultDetail from "../Pages/ResultDetail";
import SearchResult from "../Pages/SearchResult";
import Favorites from "../Pages/Favorites";

function Pages() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="SearchResult" element={<SearchResult />} />
        <Route path=":id" element={<ResultDetail />} />
        <Route path="Favorites" element={<Favorites />} />
     
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;
