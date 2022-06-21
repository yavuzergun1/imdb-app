// YORUM SATIRINDA OLAN KODLAR IMDB VERİSİ ALMAK İÇİN YAZILDI. VERİ ALINAMIYOR.

import { Link } from "react-router-dom";
import AddFavorites from "../../Components/Checkboxes/SRaddFavorites";
import ImdbID from "../../Components/ImdbID/ImdbID";
import NavBar from "../../Components/NavBar/NavBar";
import SearchPanel from "../../Components/SearchPanel/SearchPanel";
import { UseData } from "../../Context/Context";
import "./searchResult.scss";
function SearchResult() {
  const { data, rating } = UseData();
  console.log(data);

  if (!data) {
    return <p>Loading film data...</p>;
  }

  return (
    <div className="sr-main">
      <div className="sr-nav-container">
        <div className="sr-nav-main">
          <NavBar />
        </div>
        <div className="sr-nav">
          <div className="half-container">
            <div className="in-container">
              <span className="sr-home">Home /</span>
              <span className="sr-results"> Results</span>
            </div>
          </div>
        </div>
        <div className="sr-search-main">
          <SearchPanel />
        </div>
      </div>
      <section className="search-result">
        <div className="films-container">
          {data.map((film, index) => {
            return (
              <div className="sr-film" key={`/${index}`}>
                  <img src={film.Poster} alt="" />{" "}
                <Link to={`/${index}`}>
                  <div className="sr-biography"><p>Biography</p> </div>
                </Link>
                <AddFavorites film={film} />
                <ImdbID film={film} />
                <div>{data[index].imdbID}</div> {/* BURADAKİ imdbID ile tekrar api verisi alıp diğer bilgileri çekmem gerekiyor. */}
                <div className="title">{film.Title}</div>
                <div className="title">{film.imdbRating}</div> {/* Api burada imdbRating bilgisini sağlamıyor */}
              </div>
            );
          })}
        </div>
      </section>
      {/* <ImdbID/> */}
    </div>
  );
}

export default SearchResult;
