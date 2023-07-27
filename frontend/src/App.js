import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import HeaderMegaMenu from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Products from './pages/Products/Products'
import Single from './pages/Products/Single'
import Progress from './components/Stepper/Stepper'
import Contact_page from './components/Contact_page/Contact_page'
import Profile from './pages/Profile/Profile'


//Admin route
import AuthenticationForm from './pages/Admin/Login'
import VendorDash from './pages/Admin/Dashboard/VendoreDash/VendorDash'
import FullDash from './components/Dash_Hone/FullDash.jsx'
import DashDashboard from './components/Dash_dashboard/DashDashboard'
import DashOrders from './components/Dash_orders/DashOrders'
import Addproduct from './pages/AddProducts/AddProduct'


function App() {
  return (
    <>
      <HeaderMegaMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/singleProduct/:productId" element={<Single />} />
        <Route path="/cart" element={<Progress />} />
        <Route path="/contact" element={<Contact_page />} />
        <Route path="/profile" element={<Profile />} />



        {/* 
        <Route path="/admin" element={<AuthenticationForm />} />
        <Route path="/vendordash" element={<VendorDash />} />
        <Route path="/home_dashbord" element={<FullDash />} />
        <Route path="/products_dashbord" element={<DashDashboard />} />
        <Route path="/orders_dashbord" element={<DashOrders />} />
        <Route path="/setting" element={<Addproduct />} />
         */}


      </Routes>
      <Footer />
    </>
  );
}

export default App;