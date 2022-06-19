import React from "react";
import { useState, useEffect } from "react";
import { UseData } from "../../Context/Context";
//  IMDB VERİSİ ALMAK İÇİN YAZILDI. VERİ ALINAMIYOR.

function ImdbID() {
  const { data, searchId, setSearchId } = UseData();

  useEffect(() => {
    // if (data[0].Title!=="Undefined" ){
    //     data.map((item)=>{
    //         setSearchId([...searchId, item.imdbID])
    //     })
    // }

    // Yukarıdaki yöntem ile istenilen ID bilgileri elde edilemedi. Bu sebeple aşağıdaki yöntem uygulandı.

    setSearchId([
      data[0].imdbID,
      data[1].imdbID,
      data[2].imdbID,
      data[3].imdbID,
      data[4].imdbID,
      data[5].imdbID,
      data[6].imdbID,
      data[7].imdbID,
      data[8].imdbID,
      data[9].imdbID,
    ]);
  }, [data]);

  if (!data) {
    return <p>loading</p>;
  }

  return <div></div>;
}

export default ImdbID;
