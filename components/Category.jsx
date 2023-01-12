import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const Category = ({ category }) => {
  const { desc, image, name, slug } = category;

  return (
    <Link href={`/categories/${slug.current}`} className="category">
      <h3 className="category__name">{name}</h3>
      <p className="category__desc">{desc}</p>
      <img
        className="category__img"
        src={urlFor(image.asset._ref)}
        alt={name}
        width={100}
      />
    </Link>
  );
};

export default Category;
