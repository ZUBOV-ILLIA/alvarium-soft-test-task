/// <reference types="react-scripts" />

export interface State {
  products: Product[],
  filterFrom: number,
  filterTo: number,
  sortBy: string,
  currency: string,
  currencyFromServer: Currency,
}

export interface Action {
  type: string,
  payload: any,
};

export interface Product {
  id: number,
  name: string,
  price: number,
  image: string,
  description: string,
}

export interface Currency {
  usd: number,
  euro: number,
  gbp: number,
}
