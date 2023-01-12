import React from "react";
import Image from "next/image";
import Link from "next/link";

import Wrapper from "./Wrapper";
import Button from "./Button";

import vector from "../assets/Vector.png";
import footerImage from "../assets/footer-image.png";

const FooterBanner = () => {
  return (
    <section className="footer-banner">
      <Wrapper>
        <div className="footer-banner__container">
          <div className="footer-banner__left">
            <p className="footer-banner__discount">30% off</p>
            <div className="footer-banner__head">
              <small className="footer-banner__small-text">for him</small>
              <p className="footer-banner__big-text">best gift</p>
              <Link href="#products">
                <Button outlined value="shop now" />
              </Link>
            </div>
          </div>
          <Image
            className="footer-banner__img"
            src={footerImage}
            alt="footer-image"
            width={450}
          />
          <div className="footer-banner__right">
            <h3 className="footer-banner__product-name">men suit</h3>
            <p className="footer-banner__desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus, quis. Nisi nemo impedit odit!
            </p>
          </div>
        </div>
      </Wrapper>
      <Image src={vector} alt="vector" className="vector" />
    </section>
  );
};

export default FooterBanner;
