import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import Form from './form';
// import Header from './header';
import Booking from './booking';

test('renders learn booking form', () => {
  render(<Booking />);
  expect(screen.getByRole("button", { name: /make reservation/i })).toBeInTheDocument();
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('Renders the Header heading', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const headingElement = screen.getByText("Reserve Table");
    expect(headingElement).toBeInTheDocument();

    const reserveButton = screen.getByRole("button");
    fireEvent.click(reserveButton);

    const headingElementNew = screen.getByText("dd-mm-yy");
    expect(headingElementNew).toBeInTheDocument();
})

test('Initialize/Update Times', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  // const reserveButton = screen.getByRole("hr:min");
  const timeSelect = getByRole("combobox", { name: /choose time/i });

  fireEvent.click(reserveButton);

  const testTime = []
  // userEvent.selectOptions(screen.getByLabelText("Choose Time"),screen.getByRole('option', { name: testTime}))
  // expect(screen.getByRole('option', { name: testTime}).selected).toBe(true);

})