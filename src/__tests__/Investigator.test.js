import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Investigator from '../components/investigators/Investigator';

describe('Test investigator show page', () => {
  let investigatorDetail;
  beforeAll(async () => {
    investigatorDetail = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Investigator />
          </Router>
        </Provider>,
      )
      .toJSON();
  });
});
