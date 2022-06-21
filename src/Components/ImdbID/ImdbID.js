import React from "react";
import { useState, useEffect } from "react";
import { UseData } from "../../Context/Context";
import axios from "axios";
//  IMDB VERİSİ ALMAK İÇİN YAZILDI. VERİ ALINAMIYOR.

function ImdbID({film}) {
  const [rating, setRating]= useState();

 const getRating= async()=>{
  const key = process.env.REACT_APP_FILM_DATA;
  try {
    const { data } =await axios.get(
      `https://www.omdbapi.com/?apikey=${key}&i=${film.imdbID}`
    );
    console.log(data.imdbRating);
    setRating(data.imdbRating);
  } catch (err) {}
 }

  useEffect(() => {
  getRating();
  console.log(rating);
}, []);

  

  return <div>
    {rating}
  </div>;
}

export default ImdbID;


 // data &&
    //     data.map((item, index)=>{
    //       return ( setSearchId( item.imdbID))
    //     })
    

    // Yukarıdaki yöntem ile istenilen ID bilgileri elde edilemedi. Bu sebeple aşağıdaki yöntem uygulandı.

    // setSearchId([
    //   data[0].imdbID,
    //   data[1].imdbID,
    //   data[2].imdbID,
    //   data[3].imdbID,
    //   data[4].imdbID,
    //   data[5].imdbID,
    //   data[6].imdbID,
    //   data[7].imdbID,
    //   data[8].imdbID,
    //   data[9].imdbID,
    // ]);