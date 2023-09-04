import { useSelector } from "react-redux";
import Item from "./item";

const Carts = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <div>
      <div>
        {cart.map((item) => {
          console.log(item);
          return <Item key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Carts;
