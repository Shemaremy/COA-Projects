import React from "react";
import './components.css';

import Fox2 from '../assets/Image.jpg'
import Whale2 from '../assets/Image2.jpg'
import Baboon2 from '../assets/Image1.jpg'
import Deer2 from '../assets/Image3.jpg'




function gallery2 () {

    return(
        <>
            <div className="cards_library-2">
                <div className="card-2"><img className="img_2" src={Fox2} alt="Fox"/></div>
                <div className="card-2"><img className="img_2" src={Whale2} alt="Whale"/></div>
                <div className="card-2"><img className="img_2" src={Baboon2} alt="Baboon"/></div>
                <div className="card-2"><img className="img_2" src={Deer2} alt="Deer"/></div>
            </div>
        </>
    )
}

export default gallery2;