import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";
// import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { getOrders } from "./helper/adminapicall";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const { user, token } = isAuthenticated();

  const preload = () => {
    getOrders(user._id, token).then((data) => {
      console.log(data);
      if (data.error) {
        console.log(data.error);
      } else {
        setOrders(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  // getOrders(user._id, token).then((data) => console.log(data));
  // console.log(orders);
  // orders?.map((order, i) => {
  //   {
  //     order?.products?.map((product, i) => {
  //       console.log(product.name);
  //       console.log(i);
  //     });
  //   }
  // });

  return (
    <Base>
      <>
        <section className="container px-4 w-1/2 mx-auto py-4 h-[85vh]">
          <div className="flex items-center justify-between"></div>
          <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <span>Orders</span>
                        </th>

                        <th scope="col" className="relative py-3.5 px-0">
                          <span className="sr-only">Edddit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="flex flex-col bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      {orders.map((order, index) => (
                        <tr key={index} className="pr-10">
                          <td className="py-4 px-4 whitespace-nowrap">
                            Amount : ${order.amount}
                            {/* {order?.products?.map((product, i) => {
                              console.log(product.name);
                            })} */}
                            {/* {order?.products?.map((product, i) => (
                              <div key={i}>
                                Item {i + 1} : {product.name}
                              </div>
                            ))} */}
                          </td>

                          <td className="">{user.name}</td>

                          <td className="w-full">
                            {order?.products?.map((product, i) => (
                              <div className=" text-right " key={i}>
                                Item {i + 1} : {product.name}
                              </div>
                            ))}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-6">
            <a
              href="#"
              className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
            >
              {/* <ArrowLeftIcon className="w-4 h-4" /> */}
              <span>previous</span>
            </a>

            <div className="items-center hidden md:flex gap-x-3">
              <a
                href="#"
                className="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60"
              >
                1
              </a>
              <a
                href="#"
                className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
              >
                2
              </a>
              <a
                href="#"
                className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
              >
                3
              </a>
              <a
                href="#"
                className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
              >
                ...
              </a>
              <a
                href="#"
                className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
              >
                12
              </a>
              <a
                href="#"
                className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
              >
                13
              </a>
              <a
                href="#"
                className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
              >
                14
              </a>
            </div>
            <a
              href="#"
              className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
            >
              <span>Next</span>
              {/* <ArrowRightIcon className="w-4 h-4" /> */}
            </a>
          </div>
        </section>
      </>
    </Base>
  );
};

export default Orders;
