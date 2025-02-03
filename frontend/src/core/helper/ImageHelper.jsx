import React from "react";
import { API } from "../../backend";

const ImageHelper = ({ product }) => {
  const imageURL = product
    ? `${API}/product/photo/${product._id}`
    : `https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=600`;
  return (
    <figure className="pt-4">
      <img src={imageURL} alt="Shoes" className="rounded-xl" width="150px" />
    </figure>
  );
};

export default ImageHelper;
