import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import ReserveForm from '../components/ReserveForm';

describe('Testing add appoinment form', () => {
  const investigators = [
    { id: 1, city: 'Kabul', description: 'Smart one!' },
    { id: 2, city: 'Herat', description: 'Serious one!' },
  ];
  const investigator = investigators[0];

  beforeAll(() => {
    const user = { id: 1, name: 'John Doe' };
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', 'fake-token');
  });

  afterAll(() => {
    localStorage.clear();
  });

  let reserveForm;

  beforeAll(async () => {
    reserveForm = render(
      <Provider store={store}>
        <Router>
          <ReserveForm investigator={investigator} investigators={investigators} />
        </Router>
      </Provider>,
    );
    const formElement = screen.getByTestId('form');
    expect(formElement).toBeInTheDocument();
  });

  it('Component should render correctly', () => {
    expect(reserveForm).toBeTruthy();
  });

  it('It should match its snapshot', () => {
    expect(reserveForm).toMatchSnapshot();
  });

  it('Displays the city name if investigator', () => {
    const destinationName = waitFor(() => screen.getByText('Kabul'));
    waitFor(() => expect(destinationName).toBeInTheDocument());
  });

  it('Displays the correct title', () => {
    const title = screen.findByTestId('appoinment-title');
    waitFor(() => expect(title).toBeInTheDocument());
  });
});
