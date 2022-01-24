import { useState } from 'react';
import './App.css';


function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';




  return (
      <div>
      <button 
        style={{backgroundColor: buttonColor}}> 
        onClick={() => setButtonColor(newButtonColor)}
      </button>
    </div>
  
  );

  }

export default App;
