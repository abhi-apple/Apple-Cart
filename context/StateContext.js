import React, { createContext, useContext, useState, useEffect } from "react";

import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showcart, setshowcart] = useState(false);

  const [cartitems, setcartitems] = useState([]);
  const [totalprice, settotalprice] = useState(0);

  const [totalquantities, settotalquantities] = useState(0);

  const [qty, setqty] = useState(1);
  let foundprod;
  let index;

  const onAdd = (product, quantity) => {
    const checkprodincart = cartitems.find((item) => item._id === product._id);
    settotalprice((prevtotprice) => prevtotprice + product.price * quantity);
    settotalquantities((prevtotquan) => prevtotquan + quantity);
    if (checkprodincart) {
      const updatedcartitems = cartitems.map((cartprod) => {
        if (cartprod._id === product._id)
          return {
            ...cartprod,
            quantity: cartprod.quantity + quantity,
          };
      });
      setcartitems(updatedcartitems);
    } else {
      product.quantity = quantity;
      setcartitems([...cartitems, { ...product }]);
    }
    toast.success(`${qty} ${product.name} added to the cart `);
  };
const onremove=(product)=>{
  foundprod=cartitems.find((item)=>item._id===product._id)
  const newcartitems=cartitems.filter((item)=>item._id!==product._id);

  settotalprice((prevtotprice)=>prevtotprice-foundprod.price*foundprod.quantity)
  settotalquantities(prevtotquan=>prevtotquan-foundprod.quantity);
  setcartitems(newcartitems);
}

  const togglecartitemquantity = (id, value) => {
    foundprod = cartitems.find((item) => item._id === id);
    index = cartitems.findIndex((product) => product.id === id);
    const newcartitems=cartitems.filter((index)=>index._id !==id)
    if (value === "inc") {
      setcartitems([
        ...newcartitems,
        { ...foundprod, quantity: foundprod.quantity + 1 },
      ]);
      settotalprice((prevtotprice) => prevtotprice + foundprod.price);
      settotalquantities((prevtotquan) => prevtotquan + 1);
    } else if (value == "dec") {
      if (foundprod.quantity > 1) {
        setcartitems([
          ...newcartitems,
          { ...foundprod, quantity: foundprod.quantity - 1 },
        ]);
        settotalprice((prevtotprice) => prevtotprice - foundprod.price);
        settotalquantities((prevtotquan) => prevtotquan - 1);
      }
    }
  };
  const incqty = () => {
    setqty((prevqty) => prevqty + 1);
  };
  const deccqty = () => {
    setqty((prevqty) => {
      if (prevqty - 1 < 1) return 1;
      return prevqty - 1;
    });
  };
  return (
    <Context.Provider
      value={{
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
        onremove,
        setcartitems,
        settotalprice,
        settotalquantities
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
