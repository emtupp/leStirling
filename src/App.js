import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav'
import CoverImage from './maison-exterieur-cropped.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={CoverImage} alt='Cover Image' className='cover-image' />
      </header>
      <Nav/>
    </div>
  );
}

export default App;
