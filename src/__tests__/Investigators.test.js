import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Investigators from '../components/investigators/Investigators';

describe('To test investigators index page!', () => {
  let investigators;
  beforeAll(async () => {
    investigators = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Investigators />
          </Router>
        </Provider>,
      )
      .toJSON();
  });

  it('Component should render correctly', () => {
    expect(investigators).toBeTruthy();
  });

  it('It should match the snapshot', () => {
    expect(investigators).toMatchSnapshot();
  });

  it('Should render the component', () => {
    waitFor(() => expect(screen.getByText('Latest Investigators')).toBeInTheDocument());
    waitFor(() => expect(screen.getByText('Please select an investigator')).toBeInTheDocument());
  });

  it('Should link investigator to their facebook page', () => {
    const link = screen.findByTestId('investigator-link');
    waitFor(() => expect(link).toBeInTheDocument());
  });
});
