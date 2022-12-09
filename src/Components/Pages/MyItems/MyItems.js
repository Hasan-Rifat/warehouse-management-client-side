import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    //
    const getOrders = async () => {
      const email = user.email;
      const url = `https://warehouse-management-server-one.vercel.app/api/v1/order?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setOrders(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 403 || error.response.status === 401) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getOrders();
    //
  }, [user]);
  // console.log(orders);
  const handleDelete = async (id) => {
    const agree = window.confirm("are you sure you want to delete this item?");
    if (window.confirm === true) {
      toast.success("Item has been removed");
    }
    if (agree) {
      await axios.delete(
        `https://hasan-rifat-assignment-11.herokuapp.com/car/${id}`
      );
      const myItem = orders.filter((item) => item._id !== id);
      setOrders(myItem);
    }
  };
  /* const { about, email, image, price, productName, quantity, supplierName } =
    orders; */
  return (
    <section className="py-28">
      <div className="container">
        <div className="row">
          <div className="cols">
            <div>
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Product name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Image
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Description
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Quantity
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Delete
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => {
                      return (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 dark:text-black whitespace-nowrap"
                          >
                            {order.productName}
                          </th>
                          <td className="px-6 py-4">{order.email}</td>
                          <td className="px-6 py-4">
                            <img className="" src={order.image} alt="" />
                          </td>
                          <td className="px-6 py-4">
                            {order.about.slice(0, 150)}
                          </td>
                          <td className="px-6 py-4">{order.price}</td>
                          <td className="px-6 py-4">{order.quantity}</td>
                          <td className="px-6 py-4">{order.supplierName}</td>
                          <td className="px-6 py-4 text-right">
                            <Button
                              className="font-medium btn btn-primary"
                              onClick={() => handleDelete(order._id)}
                            >
                              Delete
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyItems;
