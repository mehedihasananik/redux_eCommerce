import { useSelector } from "react-redux";
import Item from "./item";
import CardData from "../CardData";

const Carts = () => {
  return (
    <div className="mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-6 overflow-hidden">
        {CardData.map((item) => {
          console.log(item);
          return <Item key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Carts;
