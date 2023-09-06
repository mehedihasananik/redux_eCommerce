import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SharedLayout from "./components/SharedLayout";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Item from "./components/item";
import Error from "./components/Error";
import Carts from "./components/Carts";
import CartDetails from "./components/CartDetails";
import toast, { Toaster } from "react-hot-toast";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />}></Route>
          <Route path="carts" element={<Carts />}></Route>
          <Route path="cartDetails" element={<CartDetails />}></Route>
          <Route path="item/:id" element={<Item />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Route>
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
