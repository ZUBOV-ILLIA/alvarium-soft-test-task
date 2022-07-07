import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setFilterFromAction, setFilterToAction, setSortByToAction } from "../../store";
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

      <label>
        USD
        <input
          type="radio"
          name="currency"
          />
      </label>

      <label>
        UAH
        <input
          type="radio"
          name="currency"
          defaultChecked
        />
      </label>

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
          from lower to upper price
        </label>

        <label>
          <input
            type="radio"
            name="sort"
            onClick={event => {
              dispatch(setSortByToAction('fromHigh'))
            }}
          />
          from upper to lower price
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