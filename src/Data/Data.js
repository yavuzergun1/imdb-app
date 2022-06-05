import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { UseData } from "../Context/Context";

function Data() {
  const { data, setData, title } = UseData();
  console.log(data);
  const getData = async () => {
    const key = process.env.REACT_APP_FILM_DATA;
    console.log(title);
    try {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=${key}&t=${title}&y=2011`
      );
      setData(data);
    } catch (err) {
      // alert('Please Enter a Valid Film Name')
    }
  };

  useEffect(() => {
    getData();
  }, [title]);

  return <div></div>;
}

export default Data;
