import Row from "../Row/Row";
import "./App.css";
import requests from "../js/requests";
import Banner from "../Banner/Banner";
import Nav from "../Nav/Nav";

// import axios from "axios";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="GOITFLIEX ORIGINAL"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Herror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      {/* <Row title="Documentaries" fetchUrl={requests.fe} /> */}
    </div>
  );
}

export default App;
