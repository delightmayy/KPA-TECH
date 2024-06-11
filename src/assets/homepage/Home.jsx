import React from "react";
import HomeHero from "./component/HomeHero";
import TrustedInd from "./component/TrustedInd";
import OurService from "./component/OurService";
import HomeFlagship from "./component/HomeFlagship";
import HomeBerkey from "./component/HomeBerkey";
import HomeCrowdeck from "./component/HomeCrowdeck";
import HomeWhy from "./component/HomeWhy";
import TestiMony from "./component/TestiMony";
import HomeContact from "./component/HomeContact";


const Home = () => {
  return (
    <>
      <HomeHero />
      <TrustedInd />
      <OurService />
      <HomeFlagship />
      <HomeBerkey />
      <HomeCrowdeck />
      <HomeWhy />
     <TestiMony />
      <HomeContact/>
     
    </>
  );
};

export default Home;
