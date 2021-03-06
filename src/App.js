
import './App.css';
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav  from "./Nav"

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow></Row>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
      <Row title="TopRated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title="Action" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Row>
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies}></Row>
    </div>
  );
}

export default App;
