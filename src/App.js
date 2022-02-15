import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Security from "./components/security/Security";
import GetFinance from "./components/getFinance/GetFinance";
import WhatWeOffer from "./components/whatWeOffer/WhatWeOffer";
import Features from "./components/features/Features";
import Testimonials from "./components/testimonials/Testimonials";
import Download from "./components/download/Download";
import Footer from "./components/footer/Footer";
import LandingPage from "./components/landingPage/LandingPage";
import SignIn from "./components/SignIn";
import SignUp from "./components/signUp/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<LandingPage />}></Route>
        <Route exact path="/login/*" element={<SignIn />}></Route>
        <Route exact path="/signup/*" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
