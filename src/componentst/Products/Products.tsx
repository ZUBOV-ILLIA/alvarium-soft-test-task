import React from "react";
import { ProductCard } from "../ProductCard";
import './Products.scss'

export const Products: React.FC = () => {
  return (
    <section
      className="products-list"
    >
      <ProductCard />
    </section>
  );
};