import React from "react";
import HeroPort2 from "./HeroPort2";
import HomeBerkey from "../../homepage/component/HomeBerkey";
import PortCrowdeck from "./PortCrowdeck";
import PortInsta from "./PortInsta";
import PortTenia from "./PortTenia";
import HomeContact from "../../homepage/component/HomeContact";

const AllProject = () => {
  return (
    <>
      <section className="md:px-1 md:py-8 ">
        <HeroPort2 />
        <HomeBerkey />
        <div className="my-8">
          <PortCrowdeck />
        </div>
        <div className="my-8">
          <PortInsta />
        </div>
        <div className="my-8">
          <PortTenia />
        </div>
      </section>
      <HomeContact />
    </>
  );
};

export default AllProject;
