import React, { useState } from "react";
import { UseData } from "../Context/Context";
import { Link } from "react-router-dom";

function Search() {
  const { setTitle } = UseData();
  
  return (
    <div>
      <form
        
      >
        <input
          id="input"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
       
      </form>
    </div>
  );
}

export default Search;
