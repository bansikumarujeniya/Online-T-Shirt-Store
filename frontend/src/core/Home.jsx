import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import { API } from "../backend";
import "../styles.css";
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";

const Home = () => {
  const [products, setproducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProducts = () => {
    getProducts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setproducts(data);
      }
    });
  };

  useEffect(() => {
    loadAllProducts();
  }, []);

  return (
    <Base title="Home Page" description="Description">
      <section className="dark:bg-white text-black ">
        <div className="container flex flex-col justify-center p-20 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-0 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="../../Images/undraw_Shopping_Bags_rbqu.png"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col justify-center p-4 mx-auto text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-xl font-bold leading-none sm:text-2xl">
              Summer Collection
            </h1>
            <p className="mt-6 mb-8 font-bold text-5xl sm:mb-12">
              New Arrivals
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <button className="btn  rounded-full">Shop Now</button>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-3 h-screen">
        <div className="flex-col flex  gap-10  sm:flex-row">
          {products.map((product, index) => {
            return (
              <div key={index}>
                <Card product={product} />
              </div>
            );
          })}
        </div>
      </div>
      <section className="py-6 dark:bg-white dark:text-gray-900">
        <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
          <h1 className="text-5xl font-bold leading-none text-center">
            Something totally different
          </h1>
          <p className="pt-2 pb-8 text-xl font-medium text-center">
            Eum omnis itaque harum at quae sequi unde similique alias asperiores
            totam. Ex cumque maxime harum doloremque, tempore nam fugiat
            aspernatur rerum ipsa unde est modi commodi molestias maiores
            eveniet eius esse asperiores neque dicta ea quisquam? Excepturi
            sapiente officiis explicabo ab?
          </p>
          <button className="px-8 py-3 text-lg font-semibold rounded btn ">
            Learn more
          </button>
        </div>
      </section>
    </Base>
  );
};

export default Home;
