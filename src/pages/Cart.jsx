import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="h-full">
      {cart.length > 0 ? (
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center gap-x-5 mt-2">
          <div className="flex flex-col gap-y-5">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />
            })}
          </div>

          <div className="flex flex-col md:gap-[45%] md:h-screen space-between justify-center bg-white mb-2 xs:items-center md:pl-7 xs:w-[60%] md:w-[20%] md:text-left">
            <div>
              <div className="text-orange-600 font-semibold" >Your Cart</div>
              <div className="text-orange-600 font-bold md:text-3xl mb-3">Summary</div>
              <p>
                <span className="font-semibold">Total Items: {cart.length}
                </span>
              </p>
            </div>


            <div className="flex flex-col gap-y-2 ">
              <p className="font-bold"><span className="font-semibold" >Total Amount:</span> ${totalAmount}</p>
              <button className="bg-orange-600 py-2 mb-4 w-[90%] rounded-lg">CheckOut Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-screen gap-y-4">
          <h1 className="text-white font-bold text-3xl">Cart Empty</h1>
          <Link to={"/"}>
            <button className="text-orange-600 font-bold text-xl bg-white border border-orange-500 py-2 px-7 rounded-lg">Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
