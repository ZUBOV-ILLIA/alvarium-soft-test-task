import React from "react";
import { useSelector } from "react-redux";
import { getProductsSelector } from "../../api/selectors";
import './ProductCard.scss';

export const ProductCard: React.FC = () => {
  const products = useSelector(getProductsSelector);

  return (
    <>
      {products.map(product => (
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