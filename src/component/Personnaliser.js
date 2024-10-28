import React, { useState } from "react";

const Perso = ({onSetcont , price}) => {

    const [count, setCount] = useState(1);
    const [inscription, setInscription] = useState('sans');
    const [active, setActive] = useState(false);
    
    const handleClick = ()=> {
        setActive(act => act === false )
    }

    const change = (e)=> {
        const value = e.target.value
        setInscription(value)
        onSetcont(inscription === 'sans' ? (price + 1000) : price - 1000 )
    }

    return(
        <div className="flex flex-col perso ">
            <p> + 1000 avec inscription</p>
            <select className="" 
                value={inscription}
                onChange={change}
            >
                <option value='sans'>Sans inscription </option>
                <option value='avec'>Inscription</option>
            </select>
            { inscription === 'avec' && <input type="email" placeholder="Entrer votre mail"/>}
            <div className="add">
               <div className="plus"> 
                    <button 
                    className="btn"
                    onClick={()=>setCount(i=> i = 1? 1 : - 1)} >-</button>
                    <button className="bt">{count}</button>

                    <button
                    className="btn"
                    onClick={()=>setCount(i=> i + 1)}>
                        +
                    </button>
                </div>
                <button className="bg-tahiti pag">🛒 Ajouter au pagner</button>
            </div>
           <button

            onClick={handleClick}>{!active? '🤍' :' ❤'} Ajouter  a la liste des souhaits</button>
           
        </div>
    )
}

export default Perso