import React, { useEffect, useState } from 'react'

const Chrono = () => {

    const [dates, setDates] = useState(new Date())
    // const [time, setTime] = useState({hours: 0, minutes: 0, seconde: 0})
    const [isActive, setIsActive] = useState(false);
    
    const now = new Date();
    // const distance = dates - now;
    
    const hours = Math.floor((dates % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60) );
    const minutes = Math.floor((dates % (1000 * 60 * 60 )) / (1000 * 60 ) );
    const seconde = Math.floor((dates % (1000 * 60  )) / (1000 ) );

    console.log(minutes, hours, seconde)
    

    // useEffect( ()=> {
    //     let interval = null;
    //     if(isActive) {
    //         interval = setInterval( ()=> {
    //             const now = new Date();
    //             const distance = dates - now;
                
    //             const hours = Math.floor((distance % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60) );
    //             const minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60 ) );
    //             const seconde = Math.floor((distance % (1000 * 60  )) / (1000 ) );

    //             setTime({ hours, minutes, seconde});

    //             if(distance < 0 ) {
    //                 clearInterval(interval)
    //                 setIsActive(false);
    //                 setTime({hours: 0, minutes: 0, seconde: 0})
    //             }
                               
    //         }, 100)
    //     }
    //      clearInterval(interval);
        
    // },[isActive, dates])
    
    
    
     const handleClick = ()=> {
        setIsActive(t => t = true)
     }
  

    

  return (
    <div className='chron'>
      <h2>{hours} : {minutes} . {seconde}</h2>
     <div>
        <button>Reset</button>
        <button onClick={handleClick}>⏯▶</button>
     </div>
    </div>
  )
}

export default Chrono
