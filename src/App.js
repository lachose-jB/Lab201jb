import './App.css';
import Navbar from './components/navbar';
import ArtisteInfo from './components/artisteInfo/ArtisteInfo';

function App() {
  return (
    <div className="Home">
      <Navbar />
      <ArtisteInfo/>
    </div>
  );
}

export default App;
