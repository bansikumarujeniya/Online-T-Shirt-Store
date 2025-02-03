import React from "react";
import Navbar from "./Navbar";

const Base = ({
  title = "Title",
  description = "Description",
  className = "bg-gray-100 text-white p-4",
  children,
}) => {
  return (
    <div>
      <Navbar />
      <div className={className}>{children}</div>
      <div>
        <footer className="footer fixed  bottom-0 footer-center p-4 bg-base-300 text-base-content">
          <div>
            <p>Copyright © 2023 - All right reserved </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Base;
