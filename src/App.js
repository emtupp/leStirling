import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav'
import CoverImage from './maison-exterieur-cropped.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className='logo' >le<div className='name'>Stirling</div></div>
      <img src={CoverImage} alt='Cover Image' className='cover-image' />
      </header>
      <Nav/>
    </div>
  );
}

export default App;
