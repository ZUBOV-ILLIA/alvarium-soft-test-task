/// <reference types="react-scripts" />

export interface State {
  products: Product[],
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
