import React, { useContext } from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { BiBattery } from "react-icons/bi";
// import { useStateContext} from '../context/StateContext';
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";
const Navbar = () => {
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
  } = useStateContext();
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Apple Cart </Link>
      </p>
      <button type="button" className="cart-icon" onClick={()=>
      setshowcart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty"> {totalquantities}</span>
      </button>
      {showcart && <Cart />}
    </div>
  );
};

export default Navbar;
