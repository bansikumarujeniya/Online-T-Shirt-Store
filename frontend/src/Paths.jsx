import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./core/Home";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminRoute from "./auth/helper/AdminRoutes";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import UserDashBoard from "./user/UserDashBoard";
import AdminDashBoard from "./user/AdminDashBoard";
import AddCategory from "./admin/AddCategory";
import ManageCategories from "./admin/ManageCategories";
import AddProduct from "./admin/AddProduct";
import ManageProducts from "./admin/ManageProducts";
import Orders from "./admin/Orders";
import UpdateProduct from "./admin/UpdateProduct";
import Cart from "./core/Cart";

const Paths = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/signin" exact element={<Signin />} />
        <Route path="/cart" element={<Cart />} />

        <Route
          path="/user/dashboard"
          element={
            <PrivateRoute>
              <UserDashBoard />
            </PrivateRoute>
          }
        ></Route>

        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashBoard />
            </AdminRoute>
          }
        ></Route>

        <Route
          path="/admin/create/category"
          element={
            <AdminRoute>
              <AddCategory />
            </AdminRoute>
          }
        ></Route>

        <Route
          path="/admin/category"
          element={
            <AdminRoute>
              <ManageCategories />
            </AdminRoute>
          }
        ></Route>

        <Route
          path="/admin/create/product"
          element={
            <AdminRoute>
              <AddProduct />
            </AdminRoute>
          }
        ></Route>

        <Route
          path="/admin/products"
          element={
            <AdminRoute>
              <ManageProducts />
            </AdminRoute>
          }
        ></Route>
        <Route
          path="/admin/orders"
          element={
            <AdminRoute>
              <Orders />
            </AdminRoute>
          }
        ></Route>

        <Route
          path="/admin/product/update/:productId"
          element={
            <AdminRoute>
              <UpdateProduct />
            </AdminRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Paths;
