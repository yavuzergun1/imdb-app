import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { UseData } from "../Context/Context";

function Data() {
  const { data, setData, title, filmId, setFilmDetail } = UseData();
  console.log(data);
  const getData = async () => {
    const key = process.env.REACT_APP_FILM_DATA;
    try {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=${key}&s=${title}&y=`
      );
      setData(data);
    } catch (err) {}

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
