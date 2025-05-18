import React from "react";
import Home from "./Pages/Home";
import ProductDescription from "./Pages/ProductDescription";
import { Routes, Route } from "react-router";
import ProductListing from "./Pages/ProductListing";
import PricingModel from "./Pages/PricingModel";
import Chat from "./Pages/Chat";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<ProductDescription />} />
      <Route path="/upload" element={<ProductListing />} />
      <Route path="/price" element={<PricingModel />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
};

export default App;
