import './App.css';
import { useState, useRef} from 'react'
import useRandomJoke from './hook/useRandomJoke';

function App() {

 
  const firstnameRef = useRef(null);
  const lastnameRef = useRef(null);

  const [firstName, setFirstName] = useState("Nicole")
  const [lastName, setLastName] = useState("Sangwa")


  const joke = useRandomJoke(firstName,lastName);

 const generateJoke = (e) =>{
   e.preventDefault()
   setFirstName(firstnameRef.current.value);
   setLastName(lastnameRef.current.value);
 }

  return (
    <div className="App">
    <div>
      <h1>The Joke Generator</h1>
    </div>
    <div>
      <h3>{joke}</h3>
    </div>
    <form  >
      <div>
      <input placeholder="firstname" ref={firstnameRef} type="text" />
      <input placeholder="lastname" ref={lastnameRef} type="text" />
      </div>
      <button
    onClick={generateJoke}
     >
       Generate joke
     </button>
    </form>
    
    </div>
  );
}

export default App;
