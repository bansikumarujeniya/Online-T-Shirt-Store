import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { isAuthenticated } from "../auth/helper";
import { cartEmpty, loadCart, removeItemFromCart } from "./helper/cartHelper";
import ImageHelper from "./helper/ImageHelper";
import { createOrder } from "./helper/orderHelper";

const Checkout = ({ products, setReload = (f) => f, reload = undefined }) => {
  const [data, setData] = useState({
    loading: false,
    success: false,
    error: "",
    address: "",
  });

  const token = isAuthenticated() && isAuthenticated().token;
  const userId = isAuthenticated() && isAuthenticated().user._id;

  const getFinalAmount = () => {
    let amount = 0;
    products.map((p) => {
      amount = amount + p.price;
    });

    return amount;
  };

  const checkOut = () => {
    const orderData = {
      products: products,
      amount: getFinalAmount(),
    };

    createOrder(userId, token, orderData);
    cartEmpty(() => {
      console.log("Checkout Done Cart Clear");
    });

    setReload(!reload);
  };

  const showButton = () => {
    return isAuthenticated() ? (
      <button className="btn" onClick={checkOut}>
        Check Out
      </button>
    ) : (
      <Link to="/signin">
        <button className="btn">Signin</button>
      </Link>
    );
  };

  return (
    <h1>
      {/* StripeCheckout {getFinalAmount()}
      {showButton()} */}
      <div className="flex flex-col mx-auto max-w-3xl p-6 space-y-4 sm:p-10  border-2 border-base-300 shadow-2xl text-black">
        <h2 className="text-xl font-semibold">Your cart</h2>
        <ul className="flex flex-col divide-y divide-gray-700">
          {products.map((product) => (
            <li
              key={product._id}
              className="flex flex-col py-6 sm:flex-row sm:justify-between"
            >
              <div className="flex w-1-4 space-x-2 sm:space-x-4">
                <div>
                  <ImageHelper product={product} />
                </div>
                <div className="flex flex-col justify-start gap-10 pt-16 w-full pb-4">
                  <div className="flex justify-between w-full pb-2 space-x-2">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                        {product.name}
                      </h3>
                      <p className="text-sm dark:text-gray-400">
                        {product.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold">₹{product.price}</p>
                    </div>
                  </div>
                  <div className="flex text-sm divide-x">
                    <button
                      type="button"
                      className="flex items-center px-2 py-1 pl-0 space-x-1"
                      onClick={() => {
                        removeItemFromCart(product._id);
                        setReload(!reload);
                        toast.success("Removed From Cart!", { theme: "dark" });
                        setReload(!reload);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 fill-current"
                      >
                        <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                        <rect width="32" height="200" x="168" y="216"></rect>
                        <rect width="32" height="200" x="240" y="216"></rect>
                        <rect width="32" height="200" x="312" y="216"></rect>
                        <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                      </svg>
                      <span>Remove</span>
                    </button>
                    <button
                      type="button"
                      className="flex items-center px-2 py-1 space-x-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 fill-current"
                      >
                        <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                      </svg>
                      <span>Add to favorites</span>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="space-y-1 text-right">
          <p>
            Total amount:
            <span className="font-semibold"> ₹{getFinalAmount()}</span>
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          <Link to={"/"}>
            <button
              type="button"
              className="btn px-6 py-2 border rounded-md "
            >
              Back
              <span className="sr-only sm:not-sr-only"> to shop</span>
            </button>
          </Link>

          {/* <button
            type="button"
            className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400"
          >
            <span className="sr-only sm:not-sr-only">Continue to</span> Checkout
          </button> */}
          {showButton()}
        </div>
      </div>
    </h1>
  );
};

export default Checkout;
