import { Link } from "react-router-dom";
import AddFavorites from "../../Components/Checkboxes/SRaddFavorites";
import NavBar from "../../Components/NavBar/NavBar";
import SearchPanel from "../../Components/SearchPanel/SearchPanel";
import { UseData } from "../../Context/Context";
import "./searchResult.scss";
function SearchResult() {
  const { data } = UseData();
  console.log(data);

  if (!data) {
    return <p>Loading film data...</p>;
  }

  return (
    <div>
      <div className="sr-nav-container">
        <NavBar />
        <div className="sr-nav">
          <span className="sr-home">Home /</span>
          <span className="sr-results"> Results</span>
        </div>
        <SearchPanel />
      </div>
      <section className="search-result">
        <div className="films-container">
          {data.map((film, index) => {
            return (
              <div className="sr-film" key={`/${index}`}>
                <Link to={`/${index}`}>
                  <img src={film.Poster} alt="" />{" "}
                </Link>
                <div>{data[index].imdbID}</div>
                <div className="title">{data[index].Title}</div>
                <div className="title">{data[index].imdbRating}</div>
                <AddFavorites film={film} />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default SearchResult;
