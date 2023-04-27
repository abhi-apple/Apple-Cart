import React, { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
  AiFillShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";

import { useStateContext } from "../context/StateContext";

import { urlFor } from "../lib/client";

import getStripe from "../lib/getStripe";

const Cart = () => {
  const cartref = useRef();
  const {
    showcart,
    cartitems,
    totalprice,
    totalquantities,
    qty,
    incqty,
    deccqty,
    onAdd,
    setshowcart,
    togglecartitemquantity,
    onremove
  } = useStateContext();
  const handlecheckout= async()=>{
    const stripe=await getStripe();

    const response=await fetch('/api/stripe',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify(cartitems)
      
    })
    // console.log(body)

    if(response.statusCode===500) return;

    const data =await response.json();
    toast.loading('Redirecting......')

    stripe.redirectToCheckout({sessionId:data.id});
  }
  return (
    <div className="cart-wrapper" ref={cartref}>
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setshowcart(false)}
        >
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalquantities} Items) </span>
        </button>

        {cartitems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={200} />
            <h3>Your Cart is Empty</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setshowcart(false)}
                className="btn"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {cartitems.length >= 1 &&
            cartitems.map((item) => (
              <div className="product" key={item._id}>
                <img
                  src={urlFor(item?.image[0])}
                  className="cart-product-image"
                />
                <div className="item-desc">
                  <div className="flex top">
                    <h5>{item.name} </h5>
                    <h4>{item.price} </h4>
                  </div>
                  <div className="flex bottom">
                    <div className="quantity">
                      <p className="quantity-desc">
                        <span className="minus" onClick={()=>
                        togglecartitemquantity(item._id,'dec')}>
                          <AiOutlineMinus />
                        </span>
                        <span className="num" >
                          {item.quantity}
                        </span>
                        <span className="plus" onClick={()=>
                        togglecartitemquantity(item._id,'inc')}>
                          <AiOutlinePlus />
                        </span>
                      </p>
                    </div>
                    <button type="button"
                    className="remove-item"
                    onClick={()=>onremove(item)}
                    >
                      <TiDeleteOutline/>
                    </button>
                  </div>
                </div>
              </div>
            ))}


        </div>
        {cartitems.length>=1 && (
          <div className="cart-bottom">

            <div className="btn-container">
              <h3> SubTotal:  ₹{totalprice}</h3>
              <h3>₹{totalprice}</h3>
            </div>
            <div className="btn-container">
              <button type="button" className="btn" onClick={handlecheckout}>
                Get The Product
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
