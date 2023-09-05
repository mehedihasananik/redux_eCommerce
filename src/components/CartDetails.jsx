import { Table } from "flowbite-react";

import { RiDeleteBin6Line } from "react-icons/ri";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

const CartDetails = () => {
  return (
    <div>
      <div className="container mx-auto py-10">
        <div className="">
          {/* cart calculation */}
          <div className="flex justify-between px-10 bg-black text-white items-center py-4 rounded-t-lg">
            <div>
              <h3>Cart Calculation</h3>
            </div>
            <div>
              <button className="border-none flex justify-center items-center py-3 px-5 bg-red-500 text-white font-bold rounded-lg cursor-pointer">
                <span>
                  <RiDeleteBin6Line />
                </span>
                <span> Empty Cart</span>
              </button>
            </div>
          </div>
          {/* table */}
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
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    <button className="border-none cursor-pointer">
                      <RiDeleteBin6Line className="w-10 h-10 bg-white border-none" />
                    </button>
                  </Table.Cell>
                  <Table.Cell>
                    <img
                      className="w-14 h-14"
                      src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp"
                      alt=""
                    />
                  </Table.Cell>
                  <Table.Cell>Punjabi</Table.Cell>
                  <Table.Cell>$2999</Table.Cell>
                  <Table.Cell>
                    <div className="flex">
                      <button className="border-none cursor-pointer">
                        <BsPlus />
                      </button>
                      <input
                        className="w-20 text-center"
                        type="text"
                        value={1}
                        disabled
                      />
                      <button className="border-none cursor-pointer">
                        <BiMinus />
                      </button>
                    </div>
                  </Table.Cell>
                  <Table.Cell>400</Table.Cell>
                </Table.Row>
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
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
