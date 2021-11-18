import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import SellerOrders from './pages/SellerOrders';
import Register from './pages/Register';
import ProductClient from './pages/ProductClient';
<<<<<<< HEAD
import CheckoutClient from './pages/CheckoutClient';
=======
import PrivateRoute from './routes/PrivateRoute';
>>>>>>> maingroup-13-dev

function App() {
  return (
    <Routes>
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route
        path="/seller/order/:id"
        element={ <PrivateRoute element={ () => <div>Seller Order ID</div> } /> }
      />
      <Route
        path="/seller/order"
        element={ <PrivateRoute element={ SellerOrders } /> }
      />
      <Route exact path="/products" element={ <ProductClient /> } />
      <Route path="/" element={ <Navigate replace to="/login" /> } />
      <Route path="/customer/products" element={ <ProductClient /> } />
      <Route path="/customer/checkout" element={ <CheckoutClient /> } />
    </Routes>
  );
}

export default App;
