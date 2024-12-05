import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Footer from './Footer';
import { Button } from './ui/button';
import ImageSlider from './ImageSlider'; 
import '../../src/animation.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardInfo from './Cardnfo';


const Home = () => {
  return (
        <div className="min-h-screen animated-gradient flex flex-col items-center p-8 text-white">
<h1 className="text-4xl font-bold mb-6">Public Distribution System</h1>
<ImageSlider />
<nav className="space-x-4 mb-8 py-8 font-bold text-2xl">
<Button asChild>
    <Link to="/Farmers" className="text-blue-200 font-bold">Farmers</Link>
  </Button>
  <Button asChild>
    <Link to="/mandis" className="text-blue-200 font-bold">Mandis</Link>
  </Button>
  <Button asChild>
    <Link to="/warehouses" className="text-green-200 font-bold">Warehouses</Link>
  </Button>
  <Button asChild>
    <Link to="/district-warehouses" className="text-yellow-200">District Warehouses</Link>
  </Button>
  <Button asChild>
    <Link to="/fair-price-shops" className="text-red-200 font-bold ">Fair Price Shops</Link>
  </Button>
  <Button asChild>
    <Link to="/Beneficiary" className="text-red-200 font-bold">Beneficiary</Link>
  </Button>
</nav>
<CardInfo/>
<Footer />
    </div>
  )
}

export default Home

