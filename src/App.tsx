import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from './api/products';
// import { getProductsSelector } from './api/selectors';
import { setProductsAction } from './store';
import './App.scss';
import { Filtration } from './componentst/Filtration';
import { Products } from './componentst/Products';

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

  useEffect(() => {
    loadProductsFromServer();
  }, []);

  // console.log(products);

  return (
    <div className="App">
      <Filtration />
      <Products />

    </div>
  );
}

export default App;
