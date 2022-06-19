import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { UseData } from "../Context/Context";

// YORUM SATIRINDA OLAN KODLAR IMDB VERİSİ ALMAK İÇİN YAZILDI. VERİ ALINAMIYOR.

function Data() {
  const { data, setData, title, filmId, setFilmDetail, year, type, searchId, /* rating, setRating  */} = UseData();
  console.log(type);
  console.log(title);
  console.log(year);
  console.log(searchId);

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
        alert(" Film Could Not Found");
      }
    }

    try {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=${key}&s=${title}`
      );
      if (data.Response === "False") {
        throw new SyntaxError();
      }
      !type && setData(data.Search);
    } catch (err) {
      alert("Film Could Not Found");
    }

      // searchId.map(async(id)=>{
      //   try {
      //     const { data } = await axios.get(
      //       `https://www.omdbapi.com/?apikey=${key}&i=${id}`
      //     );
      //     // setRating([...rating, data.imdbRating]);
      //   } catch (err) {}
      // })
    
    

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
// console.log(rating);
  return <div></div>;
}

export default Data;
