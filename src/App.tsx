import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from './api/products';
import { getProductsSelector } from './api/selectors';
import { setProductsAction } from './store';
import './App.css';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProductsSelector);

  const loadProductsFromServer = async () => {
    try {
      const productsFromServer = await getProducts();
      console.log('now will be dispatch')
      
      dispatch(setProductsAction(productsFromServer.products))
    } catch (error) {
      console.log(error, 'error');
    }
  }

  useEffect(() => {
    loadProductsFromServer();
  }, []);
  
  console.log(products);

  return (
    <div className="App">
      <h1>Title</h1>
    </div>
  );
}

export default App;
