import './App.css';
import Navbar from './components/navbar';
import ArtisteInfo from './components/artisteInfo/ArtisteInfo';
import Actualité from './components/Actualité';
import Album from './components/Album';
import Date from './components/Date';

function App() {
  return (
    <div className="Home">
      <Navbar />
      <ArtisteInfo/>
      <Album/>
      <Date/>
      <Actualité/>
    </div>
  );
}

export default App;
