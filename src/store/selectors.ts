import { State } from "../react-app-env";

export const getProductsSelector = (state: State) => state.products;
export const setFilterFromSelector = (state: State) => state.filterFrom;
export const setFilterToSelector = (state: State) => state.filterTo;
