import '@testing-library/jest-dom';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Layout from '../components/Layout';

describe('Testing the Layout Component', () => {
  let root;
  beforeAll(async () => {
    root = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Layout />
          </Router>
        </Provider>,
      )
      .toJSON();
  });

  it('Component should render correctly', () => {
    expect(Layout).toBeTruthy();
  });

  it('It should match its snapshot', () => {
    expect(root).toMatchSnapshot();
  });

  it('It renders navigation links', () => {
    waitFor(() => expect(NavLink.getByText('Home')).toBeInTheDocument());
    waitFor(() => expect(NavLink.getByText('My Appointments')).toBeInTheDocument());
    waitFor(() => expect(NavLink.getByText('Book an Appointment')).toBeInTheDocument());
  });
});
