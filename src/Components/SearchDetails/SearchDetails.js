import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddFavorite from "../Checkboxes/AddFavorite";
import DeleteFavorite from "../Checkboxes/DeleteFavorite";
import "./searchDetails.scss";
function ImdbID({ film, index, isFavorite }) {
  const [searchFilmDetail, setSearchFilmDetail] = useState();

  const getData = async () => {
    const key = process.env.REACT_APP_FILM_DATA;
    try {
      // SearchResult sayfasından gelen film verisinin imdbID'sini alarak tekrar fetchleme yapıyoruz. Böylece apinin ilk aramada bize vermediği detay bilgilerini almış olduk.
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=${key}&i=${film.imdbID}`
      );
      setSearchFilmDetail(data);
    } catch (err) {}
  };

  useEffect(() => {
    film && getData();
  }, [film]);

  if (!searchFilmDetail) {
    return <p>Film loading...</p>;
  }
// check değişkeni ilkbaşta işaretli değil o yüzden tıklandığından AddFavorite çalışacak
  let check = <AddFavorite film={searchFilmDetail} />;
  if (isFavorite) {
    // eğer isfavorite true ise yani film favorilere ekli ise tekrar tıklandığından deleteFavorite çalışır. film favorilerden çıkarılır ve tik kalkar.
    check = <DeleteFavorite favorite={searchFilmDetail} />;
  }
  return (
    <div className="results">
      <div className="results">
        <img src={searchFilmDetail.Poster} alt="" />{" "}
        <Link to={`/${index}`}>
          <div className="biography">
            <p>Biography</p>{" "}
          </div>
        </Link>
        {check} {/* yukarıda tanımlaması ve kontrolü yapılan check değişkeni */}
        <div className="imdb-container">
          <img
            className="imdb"
            src={require("../../Assets/IMDB-icon.png")}
            alt=""
          />
          <p className="rating">{searchFilmDetail.imdbRating}</p>
        </div>
        <p className="year"> {searchFilmDetail.Year}</p>
        <p className="title">{searchFilmDetail.Title} </p>
        <p className="plot">{searchFilmDetail.Plot} </p>
      </div>
    </div>
  );
}

export default ImdbID;
