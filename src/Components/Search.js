import React, { useState } from "react";
import { UseData } from "../Context/Context";

function Search() {
  const [form, setForm] = useState();
  const { title, setTitle } = UseData();
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTitle(form);
        }}
      >
        <input
          id="input"
          placeholder="Title"
          onChange={(e) => setForm(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Search;
