// import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { DataProvider } from "./Context/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pages from "./Router/Pages";
import Data from "./Data/Data";

function App() {
  return (
 
    <DataProvider>
      <Pages />
      <Data/>
    </DataProvider>
  );
}

export default App;
