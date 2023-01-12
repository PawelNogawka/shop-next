import React, { useState } from "react";
import Link from "next/link";

import Wrapper from "../../components/Wrapper";
import Product from "../../components/Product";
import SectionHeading from "../../components/SectionHeading";
import Button from "../../components/Button";

import { client, urlFor } from "../../lib/client";
import { useStateContext } from "../../context/StateContext";

import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

const ProductDetails = ({ product, products }) => {
  const { name, desc, price, image, category, rating,  } = product;

  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const stars = [];
  const [index, setIndex] = useState(0);
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<AiFillStar key={i} />);
    } else {
      stars.push(<AiOutlineStar key={i} />);
    }
  }

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  };

  return (
    <main>
      <section className="details section-padding">
        <Wrapper>
          <div className="details__container">
            <div className="details__product-images-box">
              <div className="details__big-image-box">
                <img src={urlFor(image[index])} alt={name} />
              </div>
              <div className="details__small-images-box">
                {image.map((item, i) => (
                  <img
                    key={i}
                    src={urlFor(item)}
                    className={
                      i === index ? "small-image selected-image" : "small-image"
                    }
                    onMouseEnter={() => setIndex(i)}
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>
            </div>
            <div className="details__product-info">
              <h1 className="details__name">{name}</h1>
              <Link href={`/categories/${category.slug.current}`} className="details__category-name">
                {category.name}
              </Link>
              <div className="details__reviews">{stars}</div>
              <p className="details__desc">{desc}</p>
              <b className="details__price">{price + "$"}</b>
              <h3 className="details__heading">quanity:</h3>
              <div className="details__quanity-box">
                <button onClick={incQty} className="details__quanity-btn">
                  <span>+</span>
                </button>
                <div className="details__quanity-amount">{qty}</div>
                <button onClick={decQty} className="details__quanity-btn">
                  -
                </button>
              </div>
              <div className="details__btns-box">
                <Button
                  onClick={() => onAdd(product, qty)}
                  value="add to card"
                  outlined
                />
                <Button value="buy now" full onClick={handleBuyNow} />
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
      <section className="similar-products section-padding">
        <Wrapper>
          <SectionHeading
            title="you might also like"
            desc="lorem ipsum doler si amet"
            margin
          />
          <div className="similar-products__container">
            {products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        </Wrapper>
      </section>
    </main>
  );
};

export const getStaticProps = async ({ params }) => {
  const productQuery = `*[_type == "product" && slug.current == '${params.slug}'][0]{name ,price, image, desc, rating, slug, _id, category->{name,slug}}`;
  const productsQuery = '*[_type == "product" && _id != $id]';

  const product = await client.fetch(productQuery);
  const products = await client.fetch(productsQuery, { id: product._id });

  return {
    props: {
      product,
      products,
    },
  };
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export default ProductDetails;
