import React from 'react'
import PortInsta from './PortInsta';
import PortCrowdeck from './PortCrowdeck';
import HomeBerkey from '../../homepage/component/HomeBerkey';
import HomeContact from '../../homepage/component/HomeContact';

const WebApp = () => {
  
    return (
        <>
          <section className="md:p-8">
            <div className="p-4">
              <PortInsta/>
            </div>
            <div className="p-4">
             <PortCrowdeck/>
            </div>
            <div className="md:p-4">
             <HomeBerkey/>
            </div>
          </section>
          <HomeContact/>
        </>
      );
 
}

export default WebApp