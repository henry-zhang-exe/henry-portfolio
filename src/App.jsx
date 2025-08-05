import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./components/home.jsx"
import PortfolioItem1 from './pages/portfolioItem1.jsx';

function App() {
  return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="portfolioItem1" element={<PortfolioItem1 />} />
        </Routes>
        </BrowserRouter>
  )
}

export default App
