import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import Ao from "../pages/Ao";
// import Quan from "../pages/Quan";
// import Vay from "../pages/Vay";
// import SetBo from "../pages/SetBo";
import LienHe from "../pages/contact";
import Introduce from "../pages/introduce";
import Cart from "../components/cart/Cart";
import Search from "../pages/search/search";
import Admin from "../pages/Admin";
import Order from "../pages/order/order";
import Success from "../pages/success";
import Err from "../pages/err";

const AppRouters = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} exact />
      <Route path="user/login" element={<Login />} />
      <Route path="user/register" element={<Register />} />
      <Route path="Ao" element={<Ao type={"Ao"} />} />
      <Route path="Quan" element={<Ao type={"Quan"} />} />
      <Route path="Chan_vay" element={<Ao type={"Vay"} />} />
      <Route path="SetBo" element={<Ao type={"SetBo"} />} />
      <Route path="lien_he" element={<LienHe />} />
      <Route path="gioi_thieu" element={<Introduce />} />
      <Route path="cart" element={<Cart />} />
      <Route path="search" element={<Search />} />
      <Route path="Admin" element={<Admin />} />
      <Route path="Order" element={<Order />} />
      <Route path="/Success" element={<Success />} />
      <Route path="/Err" element={<Err />} />
    </Routes>
  );
};

export default AppRouters;
