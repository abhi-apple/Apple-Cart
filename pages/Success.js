import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { useStateContext } from "../context/StateContext";
import { runFireworks } from "../lib/utils";

const Success = () => {
  const { setcartitems, settotalprice, settotalquantities } = useStateContext();
  useEffect(()=>{
      localStorage.clear();
      setcartitems([]);
      settotalprice(0);
      settotalquantities(0);
      runFireworks();
  },[])
  return (<div className="success-wrapper">
      <div className="success">
          <p className="icon">
              <BsBagCheckFill/>
          </p>
          <h2 > Thank You For Placing Your Order</h2>
          <p className="email-msg">Check Your Mail For receipt</p>
          <p className="description">
              If You Have any questions , Please email
              <a className="email" href="mailto:order@example.com">
                  order@example.com
              </a>

          </p>
          <Link href="/">
              <button className="btn" width="300px" type="button" > 
              Continue Shopping
              </button>
          </Link>
      </div>
  </div>);
};

export default Success;
