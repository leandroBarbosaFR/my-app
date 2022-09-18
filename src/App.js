import './App.css';
import HelloWorld from './components/HelloWorld';
import Person from './components/person';
// import Frase from './components/Frase';
import BrandExample from './components/BrandExample';


function App() {

  return (
    <div className="App">
      <BrandExample />
      <HelloWorld />
      <Person
      name="Leandro"
      age="32"
      image="https://via.placeholder.com/150" />
    </div>
  );
}

export default App;
