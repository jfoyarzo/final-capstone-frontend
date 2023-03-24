import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Appointments from '../components/appointments/Appointments';

describe('Appoinments tests', () => {
  let appointments;
  beforeAll(async () => {
    appointments = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Appointments />
          </Router>
        </Provider>,
      )
      .toJSON();
  });

  it('Component should render correctly', () => {
    expect(appointments).toBeTruthy();
  });

  it('It should match its snapshot', () => {
    expect(appointments).toMatchSnapshot();
  });

  test('It should render the component with the correct heading', () => {
    const heading = waitFor(() => screen.getByRole('heading', { name: 'Appointments' }));
    waitFor(() => expect(heading).toBeInTheDocument());
  });
});
