import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { FormComponent } from './components/form';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <FormComponent />
    </Provider>
  );
}

export default App;
