import React from 'react';
import { Provider } from 'react-redux';
import store from './Store/store.js';
import AddProductForm from './redusers/AddProductForm';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Product Management App</h1>
        <AddProductForm />
        <ProductList />
      </div>
    </Provider>
  );
};

export default App;