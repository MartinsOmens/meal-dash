import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Cart from "../pages/Cart";
import PlaceOrder from "../pages/PlaceOrder";
import Footer from "../components/Footer";
import LoginPop from "../components/LoginPop";
import Checkout from "../pages/Checkout";

const AppRouter = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPop setShowLogin={setShowLogin} /> : <></>}
      <div className="min-h-screen flex flex-col">
        <Navbar setShowLogin={setShowLogin} />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<PlaceOrder />} />
            <Route path="/checkout" element = {<Checkout/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AppRouter;
