import React from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "./Button";
import Wrapper from "./Wrapper";

import vector from "../assets/vector.png";

import { urlFor } from "../lib/client";

const Banner = ({ bannerData }) => {
  const { buttonText, desc, discount, image, productName, subTitle, title } =
    bannerData;

  return (
    <section className="banner">
      <Wrapper>
        <div className="banner__container">
          <div className="banner__left">
            <h3 className="banner__subtitle">{subTitle}</h3>
            <h1 className="banner__heading">{title}</h1>
            <p className="banner__desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              dignissimos natus ut numquam.
            </p>
            <Link href="#products">
              <Button value={buttonText} full shadow />
            </Link>
          </div>
          <img
            src={urlFor(image.asset._ref)}
            alt="banner image"
            width={390}
            className="banner__image"
          />
          <div className="banner__right">
            <h2 className="banner__product-name">{productName}</h2>
            <p className="banner__product-desc">{desc}</p>
            <div className="banner__discount">
              <p className="banner__discount-title">discount:</p>
              <p className="banner__discount-amount">{`${discount}%`}</p>
            </div>
          </div>
        </div>
      </Wrapper>
      <Image src={vector} alt="vector" className="vector" />
    </section>
  );
};

export default Banner;
