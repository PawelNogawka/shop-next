import React from "react";
import Link from "next/link";

import Button from "./Button";

import { urlFor } from "../lib/client";

import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

const Product = ({ product }) => {
  const { name, desc, price, image, category, rating, slug } = product;
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<AiFillStar key={i} />);
    } else {
      stars.push(<AiOutlineStar key={i} />);
    }
  }

  return (
    <div className="product">
      <img
        src={urlFor(image[0].asset._ref)}
        alt={name}
        width="230"
        height="200"
        loading="lazy"
        className="product__image"
      />
      <div className="product__bottom">
        <div className="product__row">
          <h3 className="product__name">{name}</h3>
          <span className="product__price">{price + "$"}</span>
        </div>
        <div className="product__row">
          {category.slug && (
            <Link
              href={`categories/${category.slug.current}`}
              className="product__category-link"
            >
              {category.name}
            </Link>
          )}
          <div className="product__rating">{stars}</div>
        </div>
        <p className="product__desc">{desc}</p>
      </div>
      <Link href={`/product/${slug.current}`}>
        <Button value="details" full shadow />
      </Link>
    </div>
  );
};

export default Product;
