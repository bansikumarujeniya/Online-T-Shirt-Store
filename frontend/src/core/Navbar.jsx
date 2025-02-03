import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signout, isAuthenticated } from "../auth/helper";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";

import Avatar from "react-avatar";

const { user } = isAuthenticated();

const currentTab = (history, path) => {
  if (location.pathname === path) {
    return { color: "#1d4ed8" };
  } else {
    return { color: "#d1d1d1" };
  }
};

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="navbar bg-gray-800">
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Tshirts
        </Link>
        {/* <a className="btn btn-ghost normal-case text-l"> */}
        {/* <Link
          style={currentTab(history, "/")}
          className="btn btn-ghost normal-case text-l"
          to="/"
        >
          Home
        </Link> */}

        <Link
          style={currentTab(history, "/cart")}
          className="btn btn-ghost normal-case text-l absolute right-40"
          to="/cart"
        >
          <div className="">
            <ShoppingCartIcon />
            <div className="badge badge-secondary badge-sm">+99</div>
          </div>
        </Link>

        {isAuthenticated() && isAuthenticated().user.role === 0 && (
          <Link
            style={currentTab(history, "/dashboard")}
            className="btn btn-ghost normal-case text-l flex justify-self-end absolute right-10 top-2"
            to="/user/dashboard"
          >
            <div className="   ">
              {isAuthenticated() && (
                <div className="flex items-center space-x-2  ">
                  {/* <img
                    className="inline-block w-12 h-12 rounded-full"
                    src="https://source.unsplash.com/150x150/?portrait?3"
                   
                    alt="Dan_Abromov"
                  /> */}
                  <Avatar
                    name={user.name}
                    className="inline-block w-10 h-10 rounded-full"
                    size="50"
                  />
                </div>
              )}
            </div>
          </Link>
        )}

        {isAuthenticated() && isAuthenticated().user.role === 1 && (
          <Link
            style={currentTab(history, "/admin/dashboard")}
            className="btn btn-ghost normal-case text-l flex justify-self-end absolute right-10 top-2"
            to="/admin/dashboard"
          >
            <div className="   ">
              {isAuthenticated() && (
                <div className="flex items-center space-x-2  ">
                  {/* <img
                    className="inline-block w-12 h-12 rounded-full"
                    src="https://source.unsplash.com/150x150/?portrait?3"
                   
                    alt="Dan_Abromov"
                  /> */}
                  <Avatar
                    name={user.name}
                    className="inline-block w-10 h-10 rounded-full"
                    size="50"
                  />
                </div>
              )}
            </div>
          </Link>
        )}

        {!isAuthenticated() && (
          <>
            <Link
              style={currentTab(history, "/signup")}
              className="btn btn-ghost normal-case text-l"
              to="/signup"
            >
              Signup
            </Link>

            <Link
              style={currentTab(history, "/signin")}
              className="btn btn-ghost normal-case text-l"
              to="/signin"
            >
              Signin
            </Link>
          </>
        )}

        {isAuthenticated() && (
          <span
            className="btn btn-ghost normal-case text-l right-28 absolute"
            onClick={() => {
              signout(() => {
                navigate("/");
              });
            }}
          >
            <LogoutIcon className="ml-1" />
          </span>

          // <Link
          //   style={currentTab(history, "/signout")}
          //   className="btn btn-ghost normal-case text-l"
          //   to="/signout"
          // >
          //   Signout
          // </Link>
        )}
        {/* <div className=" flex justify-self-end absolute right-56 top-2  ">
          {isAuthenticated() && (
            <div className="flex items-center space-x-2  ">
              <img
                className="inline-block w-12 h-12 rounded-full"
                src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                alt="Dan_Abromov"
              />
              <span className="flex flex-col">
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {user.name}
                </span>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  @{user.name}
                </span>
              </span>
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
