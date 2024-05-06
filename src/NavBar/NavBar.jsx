import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import About from "../pages/about/About";
import Basket from "../pages/basket/Basket";
import CardsProduct from "../pages/cardsProduct/CardsProduct";
import Catalog from "../pages/catalog/Catalog";
import DelPay from "../pages/delPay/DelPay";
import Faq from "../pages/faq/FAQ";
import Home from "../pages/home/Home";
import NotFound from "../pages/notFound/NotFound";
import Order from "../pages/order/Order";
import Success from "../pages/success/Success";
import Contact from "../pages/contact/Contact";
// import Mistake from "../pages/mistake/Mistake";

import CatalogPage from "../pages/catalog/Catalog";

import Client from "../pages/client/Client";


function NavBar() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="basket" element={<Basket />} />
        <Route path="cardsProduct" element={<CardsProduct />} />
        <Route path="catalogPage" element={<CatalogPage/>} />
        <Route path="delPay" element={<DelPay />} />
        <Route path="faq" element={<Faq />} />
        <Route path="mistake" element={<Mistake />} />
        <Route path="*" element={<NotFound />} />
        <Route path="order" element={<Order />} />
        <Route path="success" element={<Success />} />
        <Route path="contact" element={<Contact/>}/>
        <Route path="client" element={<Client/>}/>
        {/* <Route path="mistakePayment" element={<Mistake/>}/> */}
      </Route>
    </Routes>
  );
}

export default NavBar;
