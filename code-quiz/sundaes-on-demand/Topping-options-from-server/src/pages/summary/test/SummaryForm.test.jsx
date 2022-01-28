import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SummaryForm from '../SummaryForm';

test('Initial conditions', () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole('checkbox', {
        name: /Terms and Conditions/i,
    });
    expect(checkbox).not.toBeChecked();

    const confirmButton = screen.getByRole('button', {name: /Confirm order/i});
    expect(confirmButton).toBeDisabled();


});

test('Checked disables button on firt click and disables on second click', () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole('checkbox', {
        name: /Terms and Conditions/i,
});
  //pegar o obj e armazena na variavel
    const confirmButton = screen.getByRole('button', {name: /Confirm order/i});
  
    //evento de click no checkbox
    userEvent.click(checkbox);
    expect(confirmButton).toBeEnabled();

    userEvent.click(checkbox);
    expect(confirmButton).toBeDisabled();
});



test('popover responds to hover', async () => {
 render(<SummaryForm />);


 //popover starts ou hidden
 const nullPopover = screen.queryByText(/No ice cream will actually be delivered/i);
 expect(nullPopover).not.toBeInTheDocument();


 //popo appears upon mouseover of checkbox label
 const termsAndConditions = screen.getByText(/Terms and Conditions/i);
 userEvent.hover(termsAndConditions);

 const popover = screen.getByText(/No ice cream will actually be delivered/i);
 expect(popover).toBeInTheDocument();

   
 ///popover disapperars when we mouse out
 userEvent.unhover(termsAndConditions);
  await waitForElementToBeRemoved(() => 
    screen.queryByText(/No ice cream will actually be delivered/i)

    );
});



