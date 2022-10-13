import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { UseData } from "../Context/Context";

function Data() {
  const { data, setData, title, filmId, setFilmDetail, year, type } = UseData();

  const getData = async () => {
    const key = process.env.REACT_APP_FILM_DATA;
    // api year girilip type girilmediği zaman hata verebiliyor. Bu yüzden  alttaki api her ikisinin de girilmesi halinde çalışacak
    if (type !== undefined || year !== undefined ) {
      try {
        const { data } = await axios.get(
          `https://www.omdbapi.com/?apikey=${key}&s=${title}&y=${year}&type=${type}`
        );
        if (data.Response === "False" ) {
          throw new SyntaxError(data.Error);
        }
        setData(data.Search);
      } catch (Error) {
        alert(Error);
      }
    }
  // year ve type bilgisi girilmemişse buradaki api çalışacak
    try {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=${key}&s=${title}`
      );
      console.log(data);
      if (data.Response === "False" ) {
        throw new SyntaxError(data.Error);
      }
      !type && setData(data.Search);
    } catch (Error) {
      alert(Error);
      
    }
// yukarıdaki apilerden alınan imdbID bilgisi bu apiye yönlendirilerek filmin detay bilgileri alınacak
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
