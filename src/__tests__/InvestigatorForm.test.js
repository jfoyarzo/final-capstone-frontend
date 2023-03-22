import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import InvestigatorForm from '../components/investigators/InvestigatorForm';

describe('Test adding new investigator', () => {
  let addInvestigator;

  beforeAll(async () => {
    addInvestigator = renderer
      .create(
        <Provider store={store}>
          <Router>
            <InvestigatorForm />
          </Router>
        </Provider>,
      )
      .toJSON();
  });

  it('It should render correctly', () => {
    expect(addInvestigator).toBeTruthy();
  });

  it('Should match its snapshot', () => {
    expect(addInvestigator).toMatchSnapshot();
  });

  it('It renders the form', () => {
    // to add the data-testid attribute for the form
    const form = screen.findByTestId('add-form');
    waitFor(() => expect(form).toBeInTheDocument());
  });

  it('Should have a button with Add text', () => {
    // to add the data-testid attribute for the button
    const btn = screen.findByTestId('add-btn');
    waitFor(() => expect(btn).toHaveTextContent('Add'));
  });
});
