import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Detection from "./components/Detection";
import Training from "./components/Training";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<AboutUs />} />
<Route path="/detection" element={<Detection />} />
<Route path="/training" element={<Training />} />
<Route path="/register" element={<Register />} />
<Route path="/login" element={<Login />} />
</Routes>
</div>
</Router>
);
}

export default App;