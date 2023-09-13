import { useDispatch, useSelector } from "react-redux";

import toast from "react-hot-toast";
import { addTocart } from "../feature/cart/cartSlice";

const Item = ({ item }) => {
  const { cart } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  return (
    <div>
      {/* main div */}
      <div className="md:max-w-sm shadow-lg p-5">
        {/* img */}
        <div className="">
          <img className="w-full h-72 rounded-lg " src={item.imgdata} alt="" />
        </div>
        {/* dish & rating */}
        <div className="flex justify-between pt-3">
          {/* dish*/}
          <div>
            <h3>{item.dish}</h3>
          </div>
          {/* rating */}
          <div>
            <h3>{item.rating}</h3>
          </div>
        </div>
        {/* address & price */}
        <div className="flex justify-between pt-2">
          {/* address */}
          <div>{item.address}</div>
          {/* price */}
          <div>{item.price}</div>
        </div>
        {/* hr */}
        <div className="pt-4">
          <hr />
        </div>
        {/* add to cart */}
        <div className="flex justify-between items-center pt-4">
          <div>
            <img className="w-8 " src={item.arrimg} alt="" />
          </div>
          <div>
            <button
              onClick={() => dispatch(addTocart(item))}
              className="border-2 border-red-800 bg-[#FF4D6C] text-white py-3 px-8 rounded-lg text-md cursor-pointer"
            >
              Add To Cart
            </button>
          </div>
          <div>
            <img className="w-14 " src={item.delimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
