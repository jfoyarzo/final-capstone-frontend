import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import DeleteInvestigator from '../components/investigators/DeleteInvestigator';

describe('RootLayout', () => {
  let deleteInvestigator;
  beforeAll(async () => {
    deleteInvestigator = renderer
      .create(
        <Provider store={store}>
          <Router>
            <DeleteInvestigator />
          </Router>
        </Provider>,
      )
      .toJSON();
  });

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('It should render correctly', () => {
    expect(deleteInvestigator).toBeTruthy();
  });

  it('It should match its snapshot', () => {
    expect(deleteInvestigator).toMatchSnapshot();
  });

  it('It displays correct message when there is no any investigator', () => {
    const errMessage = waitFor(() => screen.getByText(/No investigator is available!/i));
    waitFor(() => expect(errMessage).toBeInTheDocument());
  });
});
