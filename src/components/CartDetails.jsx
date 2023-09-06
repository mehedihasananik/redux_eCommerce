import { Table } from "flowbite-react";

import { RiDeleteBin6Line } from "react-icons/ri";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementItem,
  decrementItem,
  removeFromCart,
} from "../feature/cart/cartSlice";

const CartDetails = () => {
  const { cart } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  return (
    <div>
      <div className="container mx-auto py-10">
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
                <button className="border-none flex justify-center items-center py-3 px-5 bg-red-500 text-white font-bold rounded-lg cursor-pointer">
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
            <div className="border-2">
              <Table className="border-2 border-gray-300 shadow-lg" striped>
                <Table.Head className="text-lg">
                  <Table.HeadCell>Action</Table.HeadCell>
                  <Table.HeadCell>Product</Table.HeadCell>
                  <Table.HeadCell>Name</Table.HeadCell>
                  <Table.HeadCell>Price</Table.HeadCell>
                  <Table.HeadCell>Qty</Table.HeadCell>
                  <Table.HeadCell>Total Amount</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {cart.map((item) => {
                    const { id, imgdata, dish, price, qnty } = item;
                    return (
                      <Table.Row
                        key={id}
                        className="bg-white dark:border-gray-700 dark:bg-gray-800"
                      >
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                          <button
                            onClick={() => dispatch(removeFromCart(id))}
                            className="border-none cursor-pointer"
                          >
                            <RiDeleteBin6Line className="w-10 h-10 bg-white border-none" />
                          </button>
                        </Table.Cell>
                        <Table.Cell>
                          <img className="w-14 h-14" src={imgdata} alt="" />
                        </Table.Cell>
                        <Table.Cell>{dish}</Table.Cell>
                        <Table.Cell>${price}</Table.Cell>
                        <Table.Cell>
                          <div className="flex">
                            <button
                              onClick={() => dispatch(decrementItem(id))}
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
                        </Table.Cell>
                        <Table.Cell>400</Table.Cell>
                      </Table.Row>
                    );
                  })}

                  <Table.Row className="flex justify-between py-4">
                    <div>
                      <h3> Items In Cart :2</h3>
                    </div>
                    <div>
                      <h3>Total Price:₹ 700</h3>
                    </div>
                  </Table.Row>
                </Table.Body>
              </Table>
              {/* footer */}
            </div>
          ) : (
            <h3>Your Cart is empty</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
