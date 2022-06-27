import { useParams } from "react-router-dom";
import { UseData } from "../../Context/Context";
import { useEffect } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import RDaddFavorite from "../../Components/Checkboxes/RDaddFavorite";
import "./resultDetail.scss";
import RDdeleteFavorite from "../../Components/Checkboxes/RDdeleteFavorite";

function ResultDetail() {
  const { data, setFilmId, filmDetail, favorites } = UseData();
  const { id, imdbid } = useParams();
  // eğer SearchResult sayfasından filmdetail verisi gelmişse aşağıdaki useEffecti çalıştırır ve useParams ile gönderilen id verisini kullanır.
  useEffect(() => {
    id && setFilmId(data[id].imdbID); /* id verisi gelmeden çalışmaz */
  }, []);
  console.log(filmDetail);

  // eğer Favorites sayfasından tıklama yapılırsa useParams ile imdbid verisi gelir. Bu veri geldiğinde ise aşağıdaki useEffect çalışır.
  useEffect(() => {
    imdbid && setFilmId(imdbid); /* imdbid verisi gelmeden çalışmaz */
  }, []);

  if (!filmDetail) {
    return <p>Loading Film Data...</p>;
  }
  // SearchResult sayfasında yapılan kontrolün aynısı burada da yapıldı. 
  let isFavorite = false;
  favorites.forEach((favorite) => {
    if (favorite.imdbID == filmDetail.imdbID) {
      isFavorite = true;
    }
  });
  // ResultDetaildeki addFavorite tıklamasının kullanıdğı veri ve tasarım farklı olduğu için burada favoriye ekleme/çıkarma işlemleri için farklı componentler kullanıldı.
  let addFavorite = <RDaddFavorite filmDetail={filmDetail} />;
  if (isFavorite) {
    addFavorite = <RDdeleteFavorite filmDetail={filmDetail} />;
  }
  return (
    <div className="rd-main">
      <div className="rd-navbar">
        {" "}
        <NavBar />{" "}
      </div>
      <div className="sr-nav">
        <div className="half-container">
          <div className="in-container">
            <span className="sr-home">Home /</span>
            <span className="sr-results"> {filmDetail.Title} </span>
          </div>
        </div>
      </div>
      <div className="detail-container">
        <div className="rd-poster">
          <img className="rd-poster" src={filmDetail.Poster} alt="" />
        </div>
        <div className="detail">
          <span>Rating</span>
          <div className="rd-first">
            <div className="imdb-cont">
              <img src={require("../../Assets/IMDB-icon.png")} alt="" />
              <p>{filmDetail.imdbRating} </p>
            </div>
            {addFavorite}
          </div>
          <div className="rd-second">
            <p className="rd-sum">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
              tempora commodi repellat odit minima repudiandae et dolores
              debitis aut maiores labore sint accusamus delectus ab saepe quam
              autem similique optio nihil, enim esse itaque ipsum laborum.
              Voluptatibus quod, corrupti laboriosam at soluta, architecto non a
              maiores facilis sed dolores reiciendis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultDetail;
