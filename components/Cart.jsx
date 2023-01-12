import React from "react";
import Link from "next/link";

import Button from "./Button";

import { AiOutlineMinus, AiOutlinePlus, AiFillDelete } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";

import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";

const Cart = () => {

  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuantity,
    onRemove,
  } = useStateContext();

  return (
    <div className="cart">
      <div className="cart__head">
        <h2 className="cart__heading">{`shopping list (${totalQuantities})`}</h2>
        <button onClick={() => setShowCart(false)} className="cart__close-btn">
          <TiDeleteOutline />
        </button>
      </div>

      {cartItems.length === 0 && (
        <div className="cart__empty">
          <span className="cart__empty-info">there is no products</span>
          <Link href="/">
            <Button
              onClick={() => setShowCart(false)}
              value="back to shopping"
              full
            />
          </Link>
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="cart__products-list">
          {cartItems.map((item) => (
            <div key={item._id} className="cart__product">
              <div className="cart__product-left">
                <img
                  src={urlFor(item.image[0])}
                  alt={item.name}
                  width={140}
                  height={100}
                />
              </div>
              <div className="cart__product-right">
                <h3 className="cart__product-name">{item.name}</h3>
                <div className="cart__product-row">
                  <span className="cart__product-price">
                    {item.price + " $"}
                  </span>
                  <button
                    onClick={() => onRemove(item)}
                    className="cart__product-remove-btn"
                  >
                    <AiFillDelete />
                  </button>
                </div>
                <div className="cart__product-qty">
                  <button
                    onClick={() => toggleCartItemQuantity(item._id, "dec")}
                    className="cart__product-qty-btn"
                  >
                    <AiOutlineMinus />
                  </button>
                  <div className="cart__product-qty-amount">
                    {item.quantity}
                  </div>
                  <button
                    onClick={() => toggleCartItemQuantity(item._id, "inc")}
                    className="cart__product-qty-btn"
                  >
                    <AiOutlinePlus />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="cart__subtotal-box">
          <div className="cart__subtotal-row">
            <h4 className="cart__subtotal-heading">subtotal</h4>
            <b className="cart__subtotal-price">{`${totalPrice}$`}</b>
          </div>
          <Button full value="buy now" />
        </div>
      )}
    </div>
  );
};

export default Cart;
