import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { UseData } from "../Context/Context";

function Data() {
  const { data, setData, title, filmId, setFilmDetail, year, type } = UseData();
  console.log(type);
  console.log(title);
  console.log(year);
  const getData = async () => {
    const key = process.env.REACT_APP_FILM_DATA;

    if (type !== undefined || year !== undefined) {
      try {
        const { data } = await axios.get(
          `https://www.omdbapi.com/?apikey=${key}&s=${title}&y=${year}&type=${type}`
        );
        if (data.Response === "False") {
          throw new SyntaxError();
        }
        setData(data.Search);
      } catch (err) {
        alert("Your film name is undefined. Please write a valid film name");
      }
    }

    try {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=${key}&s=${title}`
      );
      if (data.Response === "False" && data.Search[0].Title === "Undefined") {
        throw new SyntaxError();
      }
      !type && setData(data.Search);
    } catch (err) {
      alert("Your film name is undefined. Please write a valid film name");
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
  }, [title, filmId, type, year]);

  return <div></div>;
}

export default Data;
