import SearchDetails from "../../Components/SearchDetails/SearchDetails";
import NavBar from "../../Components/NavBar/NavBar";
import SearchPanel from "../../Components/SearchPanel/SearchPanel";
import { UseData } from "../../Context/Context";
import "./searchResult.scss";
import {BsExclamationTriangle} from 'react-icons/bs'
function SearchResult() {
  const { data, favorites, title } = UseData();
  console.log(data);
  console.log(title);

  if(title === undefined && data[0].Title == "Undefined"){
    alert("Undefined  Film Name...")
  return  <div className="ups"> <p><BsExclamationTriangle/></p> ups! something went wrong  </div>
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
            let isFavorite = false;
            favorites.forEach((favorite) => {
              if (favorite.imdbID == film.imdbID) {
                isFavorite = true;
              }
            });
            return (
              <div className="sr-film" key={`/${index}`}>
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
