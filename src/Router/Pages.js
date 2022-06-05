import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataProvider } from "../Context/Context";
import Data from "../Data/Data";
import Home from "../Pages/Home";
import ResultDetail from "../Pages/ResultDetail";
import SearchResult from "../Pages/SearchResult";

function Pages() {
  return (
    <BrowserRouter basename="/imdb-app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="SearchResult" element={<SearchResult />} />
        <Route path="SearchResult/ResultDetail" element={<ResultDetail />} />
     
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;
