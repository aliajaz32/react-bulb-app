import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import bulbon from './bulbon.png';
import bulboff from './bulboff.png';

function App() {
  const [user,setUser] = useState(true);
  function changeState(){
    setUser(!user)
  }
  return (
    <div className="App">
    <img width='150' src={ user ? bulbon : bulboff  } alt="" /> <br />
     
      <button onClick={changeState}>   {user ? 'turn off' : 'turn on'   }   </button>
    </div>
  );
}

export default App;
