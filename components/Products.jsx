import React from "react";
import Wrapper from "./Wrapper";
import SectionHeading from "./SectionHeading";
import Product from "./Product";

const Products = ({ products }) => {
  return (
    <section id='products' className="products section-padding">
      <SectionHeading
        title="best selling products"
        desc="lorem ispum doler si amet"
        margin
      />
      <Wrapper>
        <div className="products__container">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Products;
