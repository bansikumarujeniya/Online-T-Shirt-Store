import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";
import ImageHelper from "./helper/ImageHelper";

const Card = ({
  product,
  addToCart = true,
  removeFromCart = false,
  setReload = (f) => f,
  reload = undefined,
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

  const cardTitle = product ? product.name : "A photo";
  const cardDescription = product ? product.description : "Default description";
  const cardPrice = product ? product.price : "Default price";

  const addToKart = () => {
    addItemToCart(product, () =>
      toast.success("Added to Cart!", { theme: "dark" })
    );
  };

  const navigate = useNavigate();
  // const getARedirect = (redirect) => {
  //   if (redirect) {
  //     return navigate("/cart");
  //   }
  // };

  const showAddToCart = (addToCart) => {
    return (
      addToCart && (
        <button className="btn   px-20 " onClick={addToKart}>
          Add to cart
        </button>
      )
    );
  };
  const showRemoveFromCart = (removeFromCart) => {
    return (
      removeFromCart && (
        <button
          className="btn btn-error btn-outline px-14"
          onClick={() => {
            removeItemFromCart(product._id);
            setReload(!reload);
            toast.success("Removed From Cart!", { theme: "dark" });
          }}
        >
          Remove from cart
        </button>
      )
    );
  };
  return (
    <div className="card w-96 bg-gray-100 text-black border-2 border-base-300 shadow-2xl mb-10 h-3/5 ">
      {/* {getARedirect(redirect)} */}

      <ImageHelper product={product} />

      <div className="card-body items-center text-center">
        <h2 className="card-title">{cardTitle}</h2>
        <p>{cardDescription}</p>
        <h1 className="font-bold text-xl">₹{cardPrice}</h1>
        <div className="card-actions ">{showAddToCart(addToCart)}</div>
        <div className="card-actions">{showRemoveFromCart(removeFromCart)}</div>
      </div>
    </div>
  );
};

export default Card;
