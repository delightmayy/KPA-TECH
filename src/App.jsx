import React from "react";
import Home from "./assets/homepage/Home";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./assets/errorpage/ErrorPage";
import Header from "./assets/generalcomp/Header";
import Footer from "./assets/generalcomp/Footer";
import ContactHome from "./assets/contactpage/ContactHome";
import About from "./assets/aboutuspage/About";
import Portff from "./assets/portfoliopage/Portff";
import Service from "./assets/servicepage/Service";

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Service />} />
        <Route path="/Portfolio" element={<Portff />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<ContactHome />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
