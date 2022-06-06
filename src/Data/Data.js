import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { UseData } from "../Context/Context";

function Data() {
  const { data, setData, title, filmId, setFilmDetail } = UseData();
  const getData = async () => {
    const key = process.env.REACT_APP_FILM_DATA;
    try {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=${key}&s=${title}&y=`
        );
        setData(data);
      } catch (err) {
        alert('Please Enter a Valid Film Name')
      }
      if(filmId) {
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
