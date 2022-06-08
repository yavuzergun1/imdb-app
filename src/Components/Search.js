import React, { useState } from "react";
import { UseData } from "../Context/Context";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Search() {
  const { setTitle } = UseData();
  const [form, setForm] = useState();
  const navigate = useNavigate();
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTitle(form);
          navigate("/searchresult")
        }}
      >
        <input
          id="input"
          placeholder="Title"
          onChange={(e) => setForm(e.target.value)}
        />
         <Link to="/searchresult">
       <button onClick={()=>setTitle(form)}>search</button>
      </Link>
      </form>
    </div>
  );
}

export default Search;
