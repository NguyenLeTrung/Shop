import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Pages/User/Home";
import Login from './Pages/User/Account/Login';
import Register from "./Pages/User/Account/Register";
import ForgotPassword from "./Pages/User/Account/Forgot_Password";
import Account from "./Pages/User/Account/Account_Setting";
import Shop from "./Pages/User/Product/Shop";
import Cart from "./Pages/User/Cart/Cart";
import Favourite from "./Pages/User/Cart/Favourite_List";
import Order from "./Pages/User/Product/Order";
import Detail from "./Pages/User/Product/Product_Detail";
import Payment from "./Pages/User/Cart/Payment";
import Billing from "./Pages/User/Cart/Billing";
function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/account-setting" element={<Account />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/favourite-list" element={<Favourite />} />
            <Route path="/order" element={<Order />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/billing" element={<Billing />} />
        </Routes>
    );
}

export default App;