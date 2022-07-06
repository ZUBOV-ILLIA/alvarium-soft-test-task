import React from "react";
import './Filtration.scss'

export const Filtration: React.FC = () => {
  return (
    <section
      className="filter-products"
    >
      <h3 className="filter-products__title">Price</h3>

      <div className="filter-products__from-to">
        <div className="filter-products__from-to-item">
          <p>From:</p>
          <input
            className="filter-products__from-to-input"
            type="number"
          />
        </div>

        <div className="filter-products__from-to-item">
          <p>To:</p>
          <input
            className="filter-products__from-to-input"
            type="number"
          />
        </div>
      </div>

      <h3 className="filter-products__title">Currency</h3>

      <label>
        USD
        <input
          type="radio"
          name="currency"
          defaultChecked
        />
      </label>

      <label>
        UAH
        <input
          type="radio"
          name="currency"
        />
      </label>

      <h3 className="filter-products__title">Sort</h3>

      <div className="filter-products__filter-by">
        <label>
          <input
            type="radio"
            name="sort"
          />
          from lower to upper price
        </label>

        <label>
          <input
            type="radio"
            name="sort"
          />
          from upper to lower price
        </label>

        <label>
          <input
            type="radio"
            name="sort"
            defaultChecked
          />
          alphabetically
        </label>
      </div>


    </section>
  );
};