import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState();
  const [title, setTitle] = useState();
  const [filmId, setFilmId]= useState();
  const [filmDetail, setFilmDetail]= useState();
  const values = {
    data,
    setData,
    title,
    setTitle,
    filmId,
    setFilmId,
    filmDetail,
    setFilmDetail,
  };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export const UseData = () => useContext(DataContext);
