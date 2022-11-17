import './App.css';
import Banner from './Banner';
import Header from './Header';
import Row from './Row';
import requests from './request';

function App ()
{
  return (
    <div className="App">
      <Header />
      <Banner />
      <Row
        isLargeRow={ true }
        title="NETFLIX ORIGINALS"
        fetchUrl={ requests.fetchNetFlixOriginals }
      />
      <Row
        title="Treanding Now"
        fetchUrl={ requests.fetchTrending }
      />
      <Row
        title="Top Rated"
        fetchUrl={ requests.fetchTopRated }
      />
      <Row
        title="Action Movies"
        fetchUrl={ requests.fetchActionMovies }
      />
      <Row
        title="Horror Movies"
        fetchUrl={ requests.fetchHorrorMovies }
      />
      <Row
        title="Romance Movies"
        fetchUrl={ requests.fetchRomanticMovies }
      />
      <Row
        title="Documentaries"
        fetchUrl={ requests.fetchDocumentaries }
      />
    </div>
  );
}

export default App;