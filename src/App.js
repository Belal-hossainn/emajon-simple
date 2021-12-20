import React from "react";
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import './App.css';
import Header from './componentss/Header/Header';
import ProductDetail from "./componentss/ProductDetails/ProductDetail";
import Review from "./componentss/Review/Review";
import Shop from './componentss/shop/Shop';
function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
      <Routes>
      <Route exact path="/" element={<Shop/>}/>
      <Route exact path="/shop/*" element={<Shop/>}/>
      <Route exact path="/review" element={<Review/>}/>
      <Route exact path="/product/:productKey" element={<ProductDetail/>}/>
          </Routes>
      </Router>
      
      
     
    </div>
  );
}

export default App;
