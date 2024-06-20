import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from 'react-hot-toast';
import { add, remove } from "../redux/slices/CartSlice";

const Product = ({ post }) => {
  const cart = useSelector(state => state.cart); // Ensure correct access to state.cart
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  }

  return (
    <div className="flex flex-col items-center justify-between bg-white gap-3 
    hover:scale-110 transition duration-300 ease-in p-4 mt-10 ml-5 rounded-xl "> 
      <div className="text-gray-700 font-semibold text-lg truncate w-40 mt-1">
        <p>{post.title}</p>
      </div>
      <div className="w-40 text-gray-400 font-normal text-[10px] text-left ">
        <span>{post.description.split(" ").slice(0,10).join(" ") + "..."}</span>
      </div>
      <div>
        <img src={post.image} alt={post.title} className="h-[180px]"/> 
      </div>

    <div className="flex justify-between gap-x-11 items-center">
      <div>
        <p className="text-orange-600 font-semibold">${post.price}</p>
      </div>
      
        {
          cart.some((p) => p.id === post.id) ? 
          (<button 
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase 
            hover:text-white 
            hover:bg-gray-700 transition duration-300 ease-in"
            onClick={removeFromCart}>
              Remove Item
          </button>) : 
          (<button 
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase 
            hover:text-white 
            hover:bg-gray-700 transition duration-300 ease-in"
            onClick={addToCart}>
              Add to Cart
          </button>)
        }
      </div>
    </div>
  );
};

export default Product;
