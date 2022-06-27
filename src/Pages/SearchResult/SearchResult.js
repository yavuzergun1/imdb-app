import SearchDetails from "../../Components/SearchDetails/SearchDetails";
import NavBar from "../../Components/NavBar/NavBar";
import SearchPanel from "../../Components/SearchPanel/SearchPanel";
import { UseData } from "../../Context/Context";
import "./searchResult.scss";
import {BsExclamationTriangle} from 'react-icons/bs'
function SearchResult() {
  const { data, favorites, title } = UseData();
  console.log(data);

  // eğer searchbar'a herhangi bir veri girilmemişse ve apiden gelen film adı "Undefined" aşağıdaki hata sayfasına gider
  if(title === undefined && data[0].Title == "Undefined"){
  return  <div className="ups"> <p><BsExclamationTriangle/></p> ups! something went wrong...  <details className="detail">Please write a valid film name...</details>  </div>
  }

  
  if (!data) {
    return <p>Loading film data...</p>;
  }



  return (
    <div className="sr-main">
      <div className="sr-nav-container">
        <NavBar />
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
            // filmin favorilere eklenip eklenmediğini kontrol et. eklenmişse isFavorite true değerini ver.
            // Böylece searchResult sayfasına geri dönüldüğünde favorilere ekli filmler işaretli kalmaya devam eder.
            let isFavorite = false;
            favorites.forEach((favorite) => {
              if (favorite.imdbID == film.imdbID) {
                isFavorite = true;
              }
            });
            return (
              <div className="sr-film" key={`/${index}`}>
                {/* SearchResult componentine gelen data verisi filmin imdbRating kısmını göstermiyor. bu yüzden film ve index verileri tekrar fetchleme yapılmak üzere SearchDetails componentine gönderildi.  */}
                <SearchDetails
                  film={film}
                  index={index}
                  isFavorite={isFavorite}
                />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default SearchResult;
