import React, { useEffect, useState } from "react";
import { API } from "../backend";
import "../styles.css";
import Base from "./Base";
import Card from "./Card";
import Checkout from "./Checkout";
import { loadCart } from "./helper/cartHelper";
import { getProducts } from "./helper/coreapicalls";

const Cart = () => {
  const [products, setproducts] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setproducts(loadCart());
  }, [reload]);

  const LoadAllProducts = () => {
    return (
      <div>
        {products.map((product, index) => (
          <Card
            key={index}
            product={product}
            addToCart={false}
            removeFromCart={true}
            setReload={setReload}
            reload={reload}
          />
        ))}
      </div>
    );
  };

  return (
    <Base>
      {/* <div className="grid grid-cols-2"> */}
      {/* <div>
          <LoadAllProducts />
        </div> */}
      <div className="h-screen">
        <Checkout products={products} setReload={setReload} />
      </div>
      {/* </div> */}
    </Base>
  );
};

export default Cart;
