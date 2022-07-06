import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";
import { Product, State } from "../react-app-env";

const initialState: State = {
  products: []
};

export const setProductsAction = createAction<Product[]>('SET_PRODUCTS');

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setProductsAction, (state, action) => {
    state.products = action.payload;
  })
});

export const store = configureStore({ reducer });
