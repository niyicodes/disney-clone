import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Detail from "./Components/Detail";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Home from "./Pages/Home";

function App() {
 return (
  <div className="App">
   <Header />
   <Routes>
    <Route exact path="/" element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="/detail/:id" element={<Detail />} />
   </Routes>
  </div>
 );
}

export default App;
