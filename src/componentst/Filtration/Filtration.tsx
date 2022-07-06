import React from "react";
import './Filtration.scss'

export const Filtration: React.FC = () => {
  return (
    <section
      className="filter-products"
    >
      <h1 className="filter-products__title">Цена</h1>

      <div className="filter-products__from-to">
        <div className="filter-products__from-to-item">
          <p>от:</p>
          <input
            className="filter-products__from-to-input"
            type="number"
          />
        </div>

        <div className="filter-products__from-to-item">
          <p>до:</p>
          <input
            className="filter-products__from-to-input"
            type="number"
          />
        </div>
      </div>

      <h1 className="filter-products__title">Валюта</h1>

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

      <h1 className="filter-products__title">Сортировка</h1>

      <div className="filter-products__filter-by">
        <label>
          <input
            type="radio"
            name="sort"
          />
          по возрастанию цены
        </label>

        <label>
          <input
            type="radio"
            name="sort"
          />
          по убыванию цены
        </label>

        <label>
          <input
            type="radio"
            name="sort"
            defaultChecked
          />
          по алфавиту
        </label>
      </div>


    </section>
  );
};