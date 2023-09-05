import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { cart } = useSelector((state) => state.cart);
  console.log(cart);

  return (
    <div className="bg-black font-Mulish text-white  ">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-24">
          {/* store */}
          <div>
            <Link className="no-underline visited:outline-none " to="/">
              {" "}
              <h3 className="text-3xl">E commerce</h3>
            </Link>
          </div>
          {/* icon */}
          <Link to="/CartDetails">
            <div className="relative">
              <div className="z-20">
                <MdOutlineShoppingCartCheckout style={{ fontSize: "50px" }} />
              </div>
              <div className="absolute left-8 top-[-10px]">
                <div className="flex justify-center items-center bg-[#A29DFF] rounded-full h-8 w-8  text-base text-white">
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
