import React, { useEffect } from "react";
import { Route, useNavigate } from "react-router-dom";
import { isAuthenticated } from "./index";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      return navigate("/signin");
    }
  }, []);

  return children;
};
// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const navigate = useNavigate();
//   return (
//     // Show the component only when the user is logged in
//     // Otherwise, redirect the user to /signin page
//     <Route
//       {...rest}
//       render={(props) =>
//         isAuthenticated() ? <Component {...props} /> : navigate("/signin")
//       }
//     />
//   );
// };

export default PrivateRoute;
