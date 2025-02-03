import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";
import { createCategory } from "./helper/adminapicall";

const AddCategory = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { user, token } = isAuthenticated();

  const handleChange = (event) => {
    setError("");
    // console.log(event.target.value);
    setName(event.target.value);
    // console.log(name);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSuccess(false);

    //backend request
    createCategory(user._id, token, { name }).then((data) => {
      setError("");
      setSuccess(true);
      setName("");
    });

    toast.success("Category Created Successfull", { theme: "dark" });
  };

  const MyCategoryForm = () => (
    <div className="flex items-center justify-center bg-gray-800 rounded-lg">
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
        <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
          <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
            Create a Category
          </h2>

          <form className="mt-8" onSubmit={onSubmit}>
            <div className="space-y-5">
              <div>
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900 dark:text-gray-200"
                >
                  Enter the Category
                </label>
                <div className="mt-2.5">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                    type="text"
                    placeholder="For ex. Summer"
                    required
                    autoFocus
                    value={name}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>

              <div>
                <button
                  // onClick={onSubmit}
                  className="w-full inline-flex items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500"
                  type="submit"
                >
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
  return (
    <Base className="bg-primary rounded-lg mx-auto w-3/4 p-4 my-10">
      <button className="rounded-md bg-gray-800 px-4 py-1.5 text-base font-semibold leading-7 text-white hover:bg-gray-900 mb-2">
        <Link to="/admin/dashboard">Admin Home</Link>
      </button>
      <MyCategoryForm />
    </Base>
  );
};

export default AddCategory;
