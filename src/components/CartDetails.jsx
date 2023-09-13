import { Table } from "flowbite-react";
import { Card, Typography } from "@material-tailwind/react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementItem,
  decrementItem,
  removeFromCart,
  clearCart,
} from "../feature/cart/cartSlice";
import { useEffect, useState } from "react";

const CartDetails = () => {
  const { cart } = useSelector((state) => state.cart);
  console.log(cart);

  const [totalPrice, setTotalprice] = useState(0);
  const [totalQnty, setTotalQnty] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    const totalQuntyCalcultaion = () => {
      let total = 0;
      cart.map((item) => {
        total = item.qnty + total;
      });
      setTotalQnty(total);
    };
    totalQuntyCalcultaion();
  }, [cart]);

  useEffect(() => {
    const totalCalculation = () => {
      let total = 0;
      cart.map((item) => {
        total = item.price * item.qnty + total;
      });
      setTotalprice(total);
    };
    totalCalculation();
  }, [cart]);
  const TABLE_HEAD = [
    "Action",
    "PRODUCT",
    "NAME",
    "QTY",
    "PRICE",
    "TOTAL AMOUNT",
  ];

  return (
    <div>
      <div className="container mx-auto py-4 md:py-10">
        <div className="">
          {/* cart calculation */}
          <div className="flex justify-between px-10 bg-black text-white items-center py-4 rounded-t-lg">
            <div>
              <h3>
                Cart Calculation{" "}
                {cart.length > 0 ? <span>({cart.length})</span> : null}
              </h3>
            </div>

            {cart.length > 0 ? (
              <div>
                <button
                  onClick={() => dispatch(clearCart())}
                  className="border-none flex justify-center items-center py-3 px-5 bg-red-500 text-white font-bold rounded-lg cursor-pointer"
                >
                  <span>
                    <RiDeleteBin6Line />
                  </span>
                  <span> Empty Cart</span>
                </button>
              </div>
            ) : null}
          </div>
          {/* table */}
          {cart.length > 0 ? (
            <>
              <Card className="h-full w-full overflow-x-scroll md:overflow-x-hidden border">
                <table className="w-full min-w-max table-auto text-left border">
                  <thead>
                    <tr>
                      {TABLE_HEAD.map((head) => (
                        <th
                          key={head}
                          className="border border-deep-orange-600 bg-blue-gray-50 p-4"
                        >
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold leading-none opacity-100"
                          >
                            {head}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item, index) => {
                      const { id, imgdata, dish, price, qnty } = item;
                      const classes = "p-5 ";

                      return (
                        <tr key={id}>
                          <td className={`p-5 border ${classes}`}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold border border-deep-orange-600"
                            >
                              <button
                                onClick={() => dispatch(removeFromCart(id))}
                                className="border-none cursor-pointer"
                              >
                                <RiDeleteBin6Line className="w-10 h-10 bg-white border-none" />
                              </button>
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold border border-deep-orange-600"
                            >
                              <img className="w-14 h-14" src={imgdata} alt="" />
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold border border-deep-orange-600"
                            >
                              {dish}
                            </Typography>
                          </td>
                          <td
                            className={`p-5 border border-red-500 ${classes}`}
                          >
                            <Typography
                              as="a"
                              href="#"
                              variant="small"
                              color="blue-gray"
                              className="font-medium"
                            >
                              <div className="flex">
                                <button
                                  onClick={() => {
                                    qnty <= 1
                                      ? dispatch(removeFromCart(id))
                                      : dispatch(decrementItem(id));
                                  }}
                                  className="border-none cursor-pointer"
                                >
                                  <BiMinus />
                                </button>

                                <input
                                  className="w-20 text-center"
                                  type="text"
                                  value={qnty}
                                  disabled
                                />
                                <button
                                  onClick={() => dispatch(incrementItem(id))}
                                  className="border-none cursor-pointer"
                                >
                                  <BsPlus />
                                </button>
                              </div>
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {price}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {qnty * price}
                            </Typography>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </Card>{" "}
              <div className="pt-10 flex justify-center space-x-6">
                <div>
                  <h3>Items In Cart:({totalQnty})</h3>
                </div>
                <div>
                  <h3>Total Price: ₹{totalPrice}</h3>
                </div>
              </div>
            </>
          ) : (
            <h3>Your Cart is empty</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
