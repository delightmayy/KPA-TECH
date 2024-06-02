import React from "react";
import Home from "./assets/homepage/Home";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./assets/errorpage/ErrorPage";
import Header from "./assets/generalcomp/Header";
import Footer from "./assets/generalcomp/Footer";

const App = () => {
 
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Home />} />
        <Route path="/Portfolio" element={<Home />} />
        <Route path="/Blogs" element={<Home />} />
        <Route path="/Contact" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
