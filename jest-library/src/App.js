import { useState } from 'react';
import './App.css';


function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  const currentValue = useState


  return (
      <div>
      <button 
        style={{backgroundColor: buttonColor}} 
        onClick={() => setButtonColor(newButtonColor)}
      >
        Change to {newButtonColor}
      </button>
      <input type="checkbox" />
    </div>
  
  );

  }

export default App;
