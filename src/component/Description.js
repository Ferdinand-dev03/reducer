import { useState } from "react";
import Stat from "./Start";

const Description = ({controleur})=> {

    const [rating, setRating] = useState(0);
    
    return (
        <div className="describ">
            <h2>DJI macvic 3</h2>
            <h3>{controleur} cfa</h3>
            <div className="start">
                
                <Stat size={24} 
                maxRacing={5}
                onSetRating={setRating}
                />
                <p>( {rating} avis)</p>
            </div>
            
           
        </div>
    )
}

export default Description