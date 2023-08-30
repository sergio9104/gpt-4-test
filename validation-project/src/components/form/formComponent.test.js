import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import FormComponent from './formComponent';

describe('FormComponent', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <FormComponent />
      </Provider>
    );
  });

  it('renders form fields', () => {
    expect(screen.getByPlaceholderText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Message/i)).toBeInTheDocument();
  });

  it('disables submit button if form is invalid', () => {
    expect(screen.getByText('Submit')).toBeDisabled();
  });

  it('enables submit button if form is valid', () => {
    fireEvent.change(screen.getByPlaceholderText(/First Name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByPlaceholderText(/Last Name/i), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Message/i), { target: { value: 'This is a valid message.' } });

    expect(screen.getByText('Submit')).not.toBeDisabled();
  });
});
