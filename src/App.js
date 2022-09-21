import './App.css';
import NavBar from './components/NavBar';

function App() {

  return (
    <div className="App">
      <NavBar />
      <div className='logoDiv'>
         <a href="https://fr.reactjs.org/">
            <img src='/logoreact.png'
              alt='logo'
              className='logoreact' />
         </a>
      </div>
      <h1 className='greetings1'>Hello I'm</h1>
      <h1 className='greetings'>Leandro</h1>
    </div>
  );
}

export default App;
