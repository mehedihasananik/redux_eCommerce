import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <div className="bg-black font-Mulish text-white  ">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-24">
          {/* store */}
          <div>
            <Link className="no-underline visited:outline-none " to="/">
              {" "}
              <h3 className="text-xl md:text-3xl px-2">E-commerce</h3>
            </Link>
          </div>
          {/* icon */}
          <Link to="/CartDetails">
            <div className="relative">
              <div className="z-20">
                <MdOutlineShoppingCartCheckout className="h-10 w-16 md:h-16 md:-20" />
              </div>
              <div className="absolute left-8 top-[-10px]">
                <div className="flex justify-center items-center bg-[#A29DFF] rounded-full h-6 w-6 md:h-8 md:w-8 text-base text-white">
                  {cart.length}
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
