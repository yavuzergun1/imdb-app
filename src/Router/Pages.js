import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ResultDetail from "../Pages/ResultDetail/ResultDetail";
import SearchResult from "../Pages/SearchResult/SearchResult";
import Favorites from "../Pages/Favorites/Favorites";

function Pages() {
  return (
    <BrowserRouter basename="imdb-app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="SearchResult" element={<SearchResult />} />
        <Route path=":id" element={<ResultDetail />} />
        <Route path="Favorites" element={<Favorites />} />
        <Route path="favorites/:imdbid" element={<ResultDetail />} /> {/* ResultDetail sayfasına imdbID verisini useParams ile gönderdik.  */}
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;
