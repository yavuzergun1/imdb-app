import { createContext, useContext, useState } from "react";

// YORUM SATIRINDA OLAN KODLAR IMDB VERİSİ ALMAK İÇİN YAZILDI. VERİ ALINAMIYOR.


const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState();
  const [title, setTitle] = useState();
  const [filmId, setFilmId]= useState();
  const [filmDetail, setFilmDetail]= useState();
  const [favorites, setFavorites]= useState([]);
  const [index, setIndex]= useState();
  const [year, setYear]= useState();
  const [type, setType]= useState();
  const [selectYear, setSelectYear]= useState();
  // const [searchId, setSearchId] = useState([]);
  // const [rating, setRating]= useState([]);
  const values = {
    data,
    setData,
    title,
    setTitle,
    filmId,
    setFilmId,
    filmDetail,
    setFilmDetail,
    favorites,
    setFavorites,
    index,
    setIndex,
    year,
    setYear,
    selectYear,
    setSelectYear,
    type,
    setType,
    // searchId,
    // setSearchId,
    // rating,
    // setRating,
  };
  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export const UseData = () => useContext(DataContext);
