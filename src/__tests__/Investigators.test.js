import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
// import { screen, waitFor } from '@testing-library/react';
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
});
