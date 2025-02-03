import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";
import {
  getProduct,
  updateProduct,
  getCategories,
} from "./helper/adminapicall";

const UpdateProduct = ({ match }) => {
  const { user, token } = isAuthenticated();
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    photo: "",
    categories: [],
    category: "",
    loading: false,
    error: "",
    createdProduct: "",
    getaRedirect: false,
    formData: "",
  });

  const {
    name,
    description,
    price,
    stock,
    categories,
    category,
    loading,
    error,
    createdProduct,
    getaRedirect,
    formData,
  } = values;

  const preLoad = (productId) => {
    getProduct(productId).then((data) => {
      console.log("Data : ", data);
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        preloadCaregories();
        setValues({
          ...values,
          name: data.name,
          description: data.description,
          price: data.price,
          category: data.category._id,
          stock: data.stock,
          formData: new FormData(),
        });
      }
    });
  };

  const preloadCaregories = () => {
    getCategories().then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          categories: data,
          formData: new FormData(),
        });
      }
    });
  };

  useEffect(() => {
    preLoad(window.location.pathname.split("/")[4]);
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });
    updateProduct(
      window.location.pathname.split("/")[4],
      user._id,
      token,
      formData
    ).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
        toast.error(data.error, { theme: "dark" });
      } else {
        setValues({
          ...values,
          name: "",
          description: "",
          price: "",
          photo: "",
          stock: "",
          loading: false,
          createdProduct: data.name,
        });

        toast.success(`Updated Successfull`, {
          theme: "dark",
        });
      }
    });
  };

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;

    formData.set(name, value);

    setValues({ ...values, [name]: value });
  };

  return (
    <Base className="bg-primary rounded-lg mx-auto w-3/4 p-4 my-10">
      <button className="rounded-md bg-gray-800 px-4 py-1.5 text-base font-semibold leading-7 text-white hover:bg-gray-900 mb-2">
        <Link to="/admin/dashboard">Admin Home</Link>
      </button>
      {/* <CreateProductForm />
       */}

      <div className="flex items-center justify-center bg-gray-800 rounded-lg">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
            <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
              Edit a Product
            </h2>

            <form className="mt-8" onSubmit={onSubmit}>
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900 dark:text-gray-200"
                  >
                    Post photo
                  </label>
                  <div className="mt-2.5">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="file"
                      placeholder="choose a file"
                      autoFocus
                      name="photo"
                      accept="image"
                      onChange={handleChange("photo")}
                    ></input>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900 dark:text-gray-200"
                  >
                    Enter Name
                  </label>
                  <div className="mt-2.5">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      placeholder="Name"
                      autoFocus
                      value={name}
                      onChange={handleChange("name")}
                    ></input>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900 dark:text-gray-200"
                  >
                    Enter Description
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      placeholder="Description"
                      autoFocus
                      value={description}
                      onChange={handleChange("description")}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900 dark:text-gray-200"
                  >
                    Enter Price
                  </label>
                  <div className="mt-2.5">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      placeholder="Price"
                      autoFocus
                      type="number"
                      value={price}
                      onChange={handleChange("price")}
                    ></input>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900 dark:text-gray-200"
                  >
                    Enter Category
                  </label>
                  <div className="mt-2.5">
                    <select
                      className="select select-bordered w-full max-w-xs bg-transparent dark"
                      placeholder="Category"
                      autoFocus
                      value={name}
                      onChange={handleChange("category")}
                    >
                      <option>Select</option>
                      {categories &&
                        categories.map((cate, index) => (
                          <option key={index} value={cate._id}>
                            {cate.name}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900 dark:text-gray-200"
                  >
                    Enter Quantity
                  </label>
                  <div className="mt-2.5">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      placeholder="Quantity"
                      autoFocus
                      type="num"
                      value={stock}
                      onChange={handleChange("stock")}
                    ></input>
                  </div>
                </div>

                <div>
                  <button
                    className="w-full inline-flex items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500"
                    type="submit"
                  >
                    Update Product
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default UpdateProduct;
