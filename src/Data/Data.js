import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { UseData } from "../Context/Context";

function Data() {
  const {data, setData} = UseData();
console.log(data);
  const getData = async () => {
    const key = process.env.REACT_APP_FILM_DATA;
    try {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=${key}&s=Batman&y=1995`
      );
      setData(data);
     
    } catch (err) {
      // alert('Please Enter a Valid Film Name')
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return <div></div>;
}

export default Data;
