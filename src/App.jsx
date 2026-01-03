import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Homepage from "./layouts/IndexLayout"
import Register from "./pages/auth/Register";
import Products from "./pages/products/Products";
import Error from './pages/Error';
import About from "./pages/About";
import Contect from "./pages/Contect";
import AdminDashboard from "./pages/admin/dashboard/AdminDashbord";
import SellerDashboard from "./pages/seller/dashboard/SellerDashboard";
const App = () => {
  return (
    <Routes>
  <Route path="/" element={<Homepage />}>
    <Route index element={<Products />} /> 
     <Route path="/category/:category" element={<Products />} /> 
  </Route>
  <Route path="/AdminDashboard" element={<AdminDashboard />} />
  <Route path="/SellerDashboard" element={<SellerDashboard />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contect />} />
  <Route path="*" element={<Error />} />
</Routes>

  );
};

export default App;


// npx json-server --watch db.json
