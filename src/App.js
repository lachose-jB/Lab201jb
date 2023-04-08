import './App.css';
import Navbar from './components/navbar';
import ArtisteInfo from './components/artisteInfo/ArtisteInfo';
import Actualité from './components/Actualité';
import Album from './components/Album';
import Date from './components/Date';
import PageFooter from './components/pageFooter/PageFooter';

function App() {
  return (
    <div className="Home bg-pan-left">
      <Navbar />
      <ArtisteInfo/>
      <Album/>
      <Date/>
      <Actualité/>
      <PageFooter/>
    </div>
  );
}

export default App;