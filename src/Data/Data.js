import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { UseData } from "../Context/Context";

function Data() {
  const { data, setData, title, filmId, setFilmDetail, year, type } = UseData();

  const getData = async () => {
    const key = process.env.REACT_APP_FILM_DATA;
    
    try {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=${key}&s=${title}&y=${year}`
      );
      if (data.Response==='False' && data.Search[0].Title==="Undefined"){throw new SyntaxError()}
      setData(data);
    } catch (err) {
      alert("Your film name is undefined. Look at the films related as 'undefined' or write a valid film name" );
    }
  
    if (filmId) {
      try {
        const { data } = await axios.get(
          `https://www.omdbapi.com/?apikey=${key}&i=${filmId}`
        );
        setFilmDetail(data);
      } catch (err) {}
    }
  };

  useEffect(() => {
    getData();
  }, [title, filmId]);

  return <div></div>;
}

export default Data;
