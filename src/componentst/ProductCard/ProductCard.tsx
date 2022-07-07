import React from "react";
import { useSelector } from "react-redux";
import { getProductsSelector, setFilterFromSelector, setFilterToSelector } from "../../store/selectors";
import './ProductCard.scss';

export const ProductCard: React.FC = () => {
  const filterFrom = useSelector(setFilterFromSelector);
  const filterTo = useSelector(setFilterToSelector);
  const products = useSelector(getProductsSelector);

  const filteredProducts = products
    .filter(product => product.price >= filterFrom && product.price <= filterTo);

  return (
    <>
      {filteredProducts.map(product => (
        <div
          className="product-card"
          key={product.id}
        >
          <div className="product-card__img-container">
            <img
              src={`alvarium-soft-test-task/img/products/${product.id}.jpg`}
              alt="product"
              className="product-card__img"
            />
          </div>
          <h3 className="product-card__title">
            {product.name}
          </h3>

          <p className="product-card__price">
            {`price ${product.price} uah`}
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