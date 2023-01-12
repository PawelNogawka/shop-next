import React from "react";
import Link from "next/link";

import Wrapper from "./Wrapper";
import Cart from "./Cart";

import { useStateContext } from "../context/StateContext";

import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <header className="header">
      <Wrapper>
        <div className="header__wrapper">
          <Link href="/" className="header__logo">
            logo
          </Link>
          <button onClick={() => setShowCart(true)} className="header__cart">
            <AiOutlineShoppingCart />
            <span className="header__cart-qty">{totalQuantities}</span>
          </button>
          {showCart && <Cart />}
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
