import React, { useEffect } from "react";
import { Route, useNavigate } from "react-router-dom";
import { isAuthenticated } from "./index";

const AdminRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = async () => {
      if (isAuthenticated() && isAuthenticated().user.role === 1) {
        return children;
      } else {
        navigate("/signin");
      }
    };

    auth();
  }, []);

  return children;
};

export default AdminRoute;
