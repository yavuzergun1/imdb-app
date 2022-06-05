import { createContext, useContext } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const values = {};

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export default context;
