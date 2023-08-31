import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { FormComponent } from './components/form';
import { EntriesList } from './components/entriesList';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <FormComponent />
      <EntriesList />
    </Provider>
  );
}

export default App;
