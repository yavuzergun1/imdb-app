import React from "react";
import { UseData } from "../Context/Context";

function ResultDetail() {
  const { data } = UseData();
  console.log(data);
  if (!data) {
    return <p>loading</p>;
  }
  return (
    <div>
      ResultDetail:{data.Plot}
      <img
        src="https://m.media-amazon.com/images/M/MV5BNTJjMmVkZjctNjNjMS00ZmI2LTlmYWEtOWNiYmQxYjY0YWVhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        alt=""
      />
    </div>
  );
}

export default ResultDetail;
