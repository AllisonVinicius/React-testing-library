import { useState } from 'react';


export function replaceCameWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}


function App() {
  const [buttonColor, setButtonColor] = useState('MediumVioletRed');
  const [disabled, setDisabled] = useState(false);
  
  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

  return (
      <div>
      <button 
        style={{backgroundColor: disabled ? 'gray' : buttonColor}} 
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {replaceCameWithSpaces(newButtonColor)}
      </button>
      <br />
      <input 
        type="checkbox" 
        id="disabled-button-checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
        />
        <label htmlFor="disabled-button-checkbox">Disabled button</label>
    </div>  
  );
  }

export default App;
