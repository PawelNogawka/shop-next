import React, { useRef } from "react";

import Wrapper from "../components/Wrapper";
import Category from "../components/Category";
import SectionHeading from "../components/SectionHeading";

import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const Categories = ({ categories }) => {
  const sliderInner = useRef();

  const handleNextBtnClick = () => {
    const slider = sliderInner.current;
    const width = slider.clientWidth;

    slider.scrollLeft = slider.scrollLeft + width;
  };

  const handlePrevBtnClick = () => {
    const slider = sliderInner.current;
    const width = slider.clientWidth;

    slider.scrollLeft = slider.scrollLeft - (width + 50);
  };

  return (
    <section className="categories section-padding">
      <SectionHeading
        title={"search products by categories"}
        desc={"lorem ipsum doler si amet."}
      />
      <Wrapper>
        <div className="categories-slider">
          <button
            onClick={() => handleNextBtnClick()}
            className="categories-slider__btn categories-slider__btn--next"
          >
            <GrNext />
          </button>
          <div ref={sliderInner} className="categories-slider__inner">
            {categories.map((category) => (
              <Category key={category._id} category={category} />
            ))}
          </div>
          <button
            onClick={() => handlePrevBtnClick()}
            className="categories-slider__btn categories-slider__btn--prev"
          >
            <GrPrevious />
          </button>
        </div>
      </Wrapper>
    </section>
  );
};

export default Categories;
