import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";
import { Product, State } from "../react-app-env";

const initialState: State = {
  products: [],
  filterFrom: 0,
  filterTo: 0,
  sortBy: 'alphabetically',
};

export const setProductsAction = createAction<Product[]>('SET_PRODUCTS');
export const setFilterFromAction = createAction<number>('SET_FILTER_FROM');
export const setFilterToAction = createAction<number>('SET_FILTER_TO');
export const setSortByToAction = createAction<string>('SET_SORT_BY');

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setProductsAction, (state, action) => {
    state.products = action.payload;
  })

  builder.addCase(setFilterFromAction, (state, action) => {
    state.filterFrom = action.payload;
  })

  builder.addCase(setFilterToAction, (state, action) => {
    state.filterTo = action.payload;
  })

  builder.addCase(setSortByToAction, (state, action) => {
    state.sortBy = action.payload;
  })
});

export const store = configureStore({ reducer });
