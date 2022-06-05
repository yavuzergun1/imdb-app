import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState();
  const [title, setTitle] = useState();
  const values = {
    data,
    setData,
    title,
    setTitle,
  };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export const UseData = () => useContext(DataContext);
