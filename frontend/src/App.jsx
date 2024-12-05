import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Mandis from './components/Mandis';
import Warehouses from './components/Warehouses';
import DistrictWarehouses from './components/DistrictWareHouses';
import FairPriceShops from './components/FairPriceShops';
import Footer from './components/Footer';
import { Button } from './components/ui/button';
import ImageSlider from './components/ImageSlider'; 
import '../src/animation.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardInfo from './components/Cardnfo';
import Beneficiary from './components/Beneficiary';
import Farmer from './components/Farmers';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Home from './components/Home';

function App() {
  return (
    <Router>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/farmers" element={<Farmer />} />
          <Route path="/mandis" element={<Mandis />} />
          <Route path="/warehouses" element={<Warehouses />} />
          <Route path="/district-warehouses" element={<DistrictWarehouses />} />
          <Route path="/fair-price-shops" element={<FairPriceShops />} />
          <Route path="/beneficiary" element={<Beneficiary />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    </Router>
  );
}

export default App;
