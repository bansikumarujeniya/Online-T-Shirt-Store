import React from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";

const AdminDashBoard = () => {
  const {
    user: { name, email, role },
  } = isAuthenticated();

  const AdminLeftSide = () => {
    return (
      <>
        <div className="card card-side bg-gray-800 mr-3">
          <div className="card-body">
            <h1 className="card-title font-bold mx-auto">Admin Navigation</h1>
            <ul className="menu bg-gray-800 w-full p-0">
              <li>
                <Link to="/admin/create/category">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Create Categories
                </Link>
              </li>
              <li>
                <Link to="/admin/category">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Manage Categories
                </Link>
              </li>
              <li>
                <Link to="/admin/create/product">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Create Product
                </Link>
              </li>
              <li>
                <Link to="/admin/products">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Manage Products
                </Link>
              </li>
              <li>
                <Link to="/admin/orders">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Manage Orders
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  };
  const AdminRightSide = () => {
    return (
      <>
        <div className="card h-full bg-gray-800 shadow-xl ">
          <div className="card-body">
            <h1 className="card-title font-bold mx-2">Admin Information</h1>
            <ul className="font-semibold">
              <li>
                <span className="badge badge-lg badge-primary p-4 m-5 ">
                  Name :
                </span>
                {name}
              </li>
              <li>
                <span className="badge badge-lg badge-primary p-4 m-5">
                  Email :
                </span>
                {email}
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  };
  return (
    <Base className="bg-primary rounded-lg mx-auto w-3/4 p-4 my-10 ">
      {/* <h1 className="text-center text-4xl">Welcome to admin Dashboard</h1> */}

      <div className="flex">
        <div className="w-1/4">
          <AdminLeftSide />
        </div>
        <div className="w-3/4">
          <AdminRightSide />
        </div>
      </div>
    </Base>
  );
};

export default AdminDashBoard;
