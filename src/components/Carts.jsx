import CardData from "../CardData";
import Item from "./Item";

const Carts = () => {
  return (
    <div className="py-3 md:py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-6 overflow-hidden">
        {CardData.map((item) => {
          // console.log(item);
          return <Item key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Carts;
