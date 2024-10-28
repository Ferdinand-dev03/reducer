import React, { useState } from "react";


const Pack = ({onSetcont, price}) => {
    
    const [controle, setControle] = useState('Avec');
    const change = (e)=> {
        const value = e.target.value;
        setControle(value);
        onSetcont(value === 'Avec' ? price + 5000 : price - 5000 )
        
    }


    return (
        <div className="flex pack gp-9 ">
           <div > 
                <input type="radio" id="oui"
                    value='Avec'
                    name="drone"
                    checked={controle === 'Avec'}
                    onChange={change}
                    
                />
                <label htmlFor="Avec">Avec controleur <span className="avec">+ 5 000</span></label>
            </div>
            <div>
                <input type="radio" id="non"
                    value='Sans'
                    name="drone"
                    checked={controle === 'Sans'}
                    onChange={change}
                />
                <label htmlFor="Sans">Sans controleur </label>
            </div>
        </div>
    )
}

export default Pack;