import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import 'react-toastify/dist/ReactToastify.css';
import { remove } from "../redux/slices/CartSlice"

const CartItem = ({ item }) => {
  const dispatch = useDispatch()

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed successfully.")
  }
  return (
    <div className="flex flex-col md:flex-row bg-white py-3 border-b-2 border-gray-700 gap-7 max-w-[750px] justify-center items-center">

      <div>
        <img src={item.image} className="h-[180px]" />
      </div>

      <div>
        <div className="text-left w-[380px]">
          <h1 className="text-gray-700 font-semibold text-lg mt-1">{item.title}</h1>
          <h1>{item.description.split(" ").slice(0,10).join(" ") + "..."}</h1>
        </div>

        <div className="flex flex-row items-center gap-[70%] mt-7">
          <div className="text-orange-600 font-semibold w-9">{item.price}</div>
          <div className="flex text-orange-700 bg-orange-200 h-[30px] w-[30px] rounded-full items-center justify-center text-xl" onClick={removeFromCart}><MdDelete /></div>
        </div>
      </div>

    </div>
  )
};

export default CartItem;
