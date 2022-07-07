import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from './api/products';
import { setCurrencyFromServerAction, setProductsAction } from './store';
import './App.scss';
import { Filtration } from './componentst/Filtration';
import { Products } from './componentst/Products';
import { getCurrency } from './api/currency';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const loadProductsFromServer = async () => {
    try {
      const productsFromServer = await getProducts();

      dispatch(setProductsAction(productsFromServer.products))
    } catch (error) {
      console.log(error, 'error');
    }
  }

  const loadCurrencyFromServer = async () => {
    try {
      const currencyFromServer = await getCurrency();

      dispatch(setCurrencyFromServerAction(currencyFromServer))
    } catch (error) {
      console.log(error, 'error');
    }
  }

  useEffect(() => {
    loadProductsFromServer();
    loadCurrencyFromServer();
  }, []);

  return (
    <div className="App">
      <Filtration />
      <Products />

    </div>
  );
}

export default App;
