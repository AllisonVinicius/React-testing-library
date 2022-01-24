import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);

  //find an element with a role of button and text of 'Change'
  const buttonStyle = screen.getByRole('button', {name: 'Change to blue'});

  //expect the background color to be red
  expect(buttonStyle).toHaveStyle({backgroundColor: 'red'});

});

test('button turns blue when clicked', () => {

  render(<App />);
  const buttonStyle = screen.getByRole('button', {name: 'Change to blue'});

  //click button
  fireEvent.click(buttonStyle);

  //expect the background color to be bliue

  expect(buttonStyle).toHaveStyle({backgroundColor: 'red'});

  //expect the button text to be ' Change to red'

  expect(buttonStyle.textContent).toBe(' Change to blue');
  
});







  


