import './App.css';
import NavBar from './components/NavBar';
// import Tape from './components/Tape';
import Marquee from "react-fast-marquee";

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
      <img src="/vector1.png" alt="marseille" className="mrs-icon" />

      {/* <Tape /> */}
      <Marquee gradientColor={false}speed={100}direction={"right"} className="marquee">
         <div>
            <img src="/react_icon.png" alt="react" className="react-icon" />
            <img src="/js_icon.png" alt="js" className="js-icon" />
            <img src="/html5_icon.png" alt="html5" className="html5-icon" />
            <img src="/css3_icon.png" alt="css3" className="css3-icon" />
            <img src="/ruby_icon.png" alt="rails" className="ruby-icon" />
            <img src="/github_icon.png" alt="github" className="github-icon" />
            <img src="/lewagon.png" alt="lewagon" className="lewagon-icon" />
         </div>
      </Marquee>
    </div>
  );
}

export default App;
