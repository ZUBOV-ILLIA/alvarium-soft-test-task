import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Product } from "../../react-app-env";
import { getProductsSelector, setCurrencyFromServerSelector, setCurrencySelector, setFilterFromSelector, setFilterToSelector, setSortBySelector } from "../../store/selectors";
import './ProductCard.scss';

export const ProductCard: React.FC = () => {
  const filterFrom = useSelector(setFilterFromSelector);
  const filterTo = useSelector(setFilterToSelector);
  const products = useSelector(getProductsSelector);
  const sortValue = useSelector(setSortBySelector);
  const currency = useSelector(setCurrencySelector);
  const currencyFromServer = useSelector(setCurrencyFromServerSelector);
  const [currentCurrency, setCurrentCurrency] = useState(1);
  const [productsToSee, setProductsToSee] = useState<Product[] | null>(null);

  const selectCurrency = (cur: string) => {
    switch (cur) {
      case 'usd':
        setCurrentCurrency(currencyFromServer.usd);
        break;

      case 'euro':
        setCurrentCurrency(currencyFromServer.euro);
        break;

      case 'gbp':
        setCurrentCurrency(currencyFromServer.gbp);
        break;

      default:
    }
  }

  const filteredFromToProducts = products
    .map(product => {
      if (currency !== 'uah') {
        return {
          ...product,
          price: Math.round(product.price * currentCurrency),
        };
      }

      return product;
    })
    .filter(product => product.price >= filterFrom && product.price <= filterTo);

  const sortBy = async (inp: string) => {
    switch (inp) {
      case 'fromSmall':
        setProductsToSee([...filteredFromToProducts].sort((a, b,) => a.price - b.price));
        break;

      case 'fromHigh':
        setProductsToSee([...filteredFromToProducts].sort((a, b,) => b.price - a.price));
        break;

      default:
        setProductsToSee([...filteredFromToProducts].sort((a, b,) => a.name.localeCompare(b.name)));
    }
  }

  useEffect(() => {
    sortBy(sortValue);
    selectCurrency(currency);
  }, [sortValue, products, filterFrom, filterTo, currency, currentCurrency]);

  return (
    <>
      {!!productsToSee && productsToSee.map(product => (
        <div
          className="product-card"
          key={product.id}
        >
          <div className="product-card__img-container">
            {/* src={`alvarium-soft-test-task/img/products/${product.id}.jpg`} */}
            <img
              src={`img/products/${product.id}.jpg`}
              alt="product"
              className="product-card__img"
            />
          </div>
          <h3 className="product-card__title">
            {product.name}
          </h3>

          <p className="product-card__price">
            {`price ${product.price} ${currency}`}
          </p>

          <p className="product-card__description">
            {product.description.slice(0, 50)}
            <a href="alvarium-soft-test-task">... see more</a>
          </p>
        </div>
      ))}
    </>
  );
};