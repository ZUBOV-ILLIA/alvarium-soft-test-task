import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Product } from "../../react-app-env";
import { getProductsSelector, setFilterFromSelector, setFilterToSelector, setSortBySelector } from "../../store/selectors";
import './ProductCard.scss';

export const ProductCard: React.FC = () => {
  const filterFrom = useSelector(setFilterFromSelector);
  const filterTo = useSelector(setFilterToSelector);
  const products = useSelector(getProductsSelector);
  const sortValue = useSelector(setSortBySelector);

  const [productsToSee, setProductsToSee] = useState<Product[] | null>(null);

  const filteredFromToProducts = products
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
  }, [sortValue, products, filterFrom, filterTo]);

  return (
    <>
      {!!productsToSee && productsToSee.map(product => (
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