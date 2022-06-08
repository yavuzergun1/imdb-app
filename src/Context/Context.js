import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState();
  const [title, setTitle] = useState();
  const [filmId, setFilmId]= useState();
  const [filmDetail, setFilmDetail]= useState();
  const [favorites, setFavorites]= useState([]);
  const [index, setIndex]= useState();
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
  };
console.log(filmId);
  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export const UseData = () => useContext(DataContext);
