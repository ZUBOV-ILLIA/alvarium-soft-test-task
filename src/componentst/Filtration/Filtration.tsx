import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrencyAction, setFilterFromAction, setFilterToAction, setSortByToAction } from "../../store";
import './Filtration.scss'

export const Filtration: React.FC = () => {
  const dispatch = useDispatch()
  const [filterFrom, setFilterFrom] = useState(0);
  const [filterTo, setFilterTo] = useState(100000);

  useEffect(() => {
    dispatch(setFilterFromAction(filterFrom));
    dispatch(setFilterToAction(filterTo));

  }, [filterFrom, filterTo]);

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
            value={filterFrom}
            min="0"
            onChange={event => {
              setFilterFrom(+event.target.value);
            }}
          />
        </div>

        <div className="filter-products__from-to-item">
          <p>To:</p>
          <input
            className="filter-products__from-to-input"
            type="number"
            value={filterTo}
            min="0"
            onChange={event => {
              setFilterTo(+event.target.value);
            }}
          />
        </div>
      </div>

      <h3 className="filter-products__title">Currency</h3>

      <div className="filter-products__currency-container">
        <label>
          <input
            type="radio"
            name="currency"
            onClick={() => {
              dispatch(setCurrencyAction('usd'))
            }}
          />
          USD
        </label>

        <label>
          <input
            type="radio"
            name="currency"
            onClick={() => {
              dispatch(setCurrencyAction('euro'))
            }}
          />
          EURO
        </label>

        <label>
          <input
            type="radio"
            name="currency"
            onClick={() => {
              dispatch(setCurrencyAction('gbp'))
            }}
          />
          GBP
        </label>

        <label>
          <input
            type="radio"
            name="currency"
            onClick={() => {
              dispatch(setCurrencyAction('uah'))
            }}
            defaultChecked
          />
          UAH
        </label>
      </div>

      <h3 className="filter-products__title">Sort</h3>

      <div className="filter-products__filter-by">
        <label>
          <input
            type="radio"
            name="sort"
            onClick={event => {
              dispatch(setSortByToAction('fromSmall'))
            }}
          />
          from lower price
        </label>

        <label>
          <input
            type="radio"
            name="sort"
            onClick={event => {
              dispatch(setSortByToAction('fromHigh'))
            }}
          />
          from upper price
        </label>

        <label>
          <input
            type="radio"
            name="sort"
            onClick={event => {
              dispatch(setSortByToAction('alphabetically'))
            }}
            defaultChecked
          />
          alphabetically
        </label>
      </div>
    </section>
  );
};