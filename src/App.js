import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Counter from "./counter";
import CounterFunctional from "./counter_functional";
import Index from "./components";
import AboutComponent from "./components/About/AboutComponent"
import ContactComponent from "./components/Contact/ContactComponent"
import HomeComponent  from "./components/Home/HomeComponent"
import ShopComponent from "./components/Shop/ShopComponent"
import Navbar from "./components/Navbar/navbar";
import ProductComponent from "./components/productComponent/ProductComponent";
import LoginComponent from "./components/Login/LoginComponent";
import SignupComponent from "./components/Signup/SignupComponent";

class App extends Component {
  render() {
    return (
      // <>   
      // <Navbar/>
      //   <Counter/>
      //  <CounterFunctional/> 
      //  <Index/>
      //  <GreetRamComponent/>
      //  <GreetRuchiComponent/> 
      //  </>

      <Router>
      <div>
        <Navbar/>
       <Routes>
        <Route exact path="/" element={<HomeComponent />} />
        <Route path="/about" element={<AboutComponent />} />
        <Route path="/contact" element={<ContactComponent />} />
        <Route path="/shop" element={<ShopComponent />} />
        <Route path="/product" element={<ProductComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/signup" element={<SignupComponent />} />


       </Routes>
 
      </div>
      </Router>
    );
  }
}
export default App;