import { MdOutlineShoppingCartCheckout } from "react-icons/md";
const Navbar = () => {
  return (
    <div className="bg-black font-Mulish text-white  ">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-24">
          {/* store */}
          <div>
            <h3 className="text-3xl">E commerce</h3>
          </div>
          {/* icon */}
          <div className="relative">
            <div className="z-20">
              <MdOutlineShoppingCartCheckout style={{ fontSize: "50px" }} />
            </div>
            <div className="absolute left-8 top-[-10px]">
              <div className="flex justify-center items-center bg-[#A29DFF] rounded-full h-8 w-8  text-base text-white">
                0
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
