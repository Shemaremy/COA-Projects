import React, {useState} from "react";
import './components.css';

import Fox from '../assets/Image.jpg'
import Whale from '../assets/Image2.jpg'
import Baboon from '../assets/Image1.jpg'
import Deer from '../assets/Image3.jpg'


            
function HoverCardEffect() {
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    }
}






function gallery1 () {

    return(
        <>
            <div className="cards_library">
                <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <img className="img_1" src={Fox} alt="Fox"/>
                    <div className="info">
                        <h1 className="name">FENNEC<br/>FOX</h1>
                        <p className="country">India</p>
                        <h5 className="know_more">Know more...</h5>
                    </div>
                </div>
                <div className="card">
                    <img className="img_1" src={Whale} alt="Whale"/>
                    <div className="info">
                        <h1 className="name">HUMPBACK<br/>WHALE</h1>
                        <p className="country">India</p>
                        <h5 className="know_more">Know more...</h5>
                    </div>
                </div>

                <div className="card">
                    <img className="img_1" src={Baboon} alt="Baboon"/>
                    <div className="info">
                        <h1 className="name">COMMON BROWN<br/>BABOON</h1>
                        <p className="country">India</p>
                        <h5 className="know_more">Know more...</h5>
                    </div>
                </div>
                <div className="card">
                    <img className="img_1" src={Deer} alt="Deer"/>
                    <div className="info">
                        <h1 className="name">SPOTTED<br/>DEER</h1>
                        <p className="country">India</p>
                        <h5 className="know_more">Know more...</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default gallery1;