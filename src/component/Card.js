import React, { useState } from "react";

import myImage from '../image/contro.jpg'


const Card = ({controleur})=> {

    

    return(
        <div className="card">
            <img src={myImage} alt="drone" />
            
        </div>
    )
}

export default Card