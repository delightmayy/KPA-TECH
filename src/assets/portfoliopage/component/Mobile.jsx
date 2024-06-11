import React from "react";
import PortFlag from "./PortFlag";
import HomeContact from "../../homepage/component/HomeContact";
import PortCrowdeck from "./PortCrowdeck";

const Mobile = () => {
  return (
    <>
      <section className="md:p-8">
        <div className="p-4">
          <PortFlag />
        </div>
        <div className="p-4">
         <PortCrowdeck/>
        </div>
      </section>
      <HomeContact />
    </>
  );
};

export default Mobile;
