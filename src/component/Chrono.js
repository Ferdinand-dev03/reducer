import React, { useEffect, useState } from 'react'

const Chrono = () => {

    const [time, setTime] = useState({hours: 0, minutes: 0, seconds: 0})
    const [isActive, setIsActive] = useState(false);
    const [isPause, setIsPause] = useState(true)
    const [intervalId , setIntervalId] = useState(null)
    const [ispause, setPause] = useState(false)
   
   useEffect( ()=> {
      let timer;
      if(isActive && !isPause){
         timer = setInterval( ()=> {
            setTime(prevTime => {
               const updateSeconds = prevTime.seconds + 1;
               const updateMinutes = prevTime.minutes + Math.floor(updateSeconds / 60);
               const updateHours = prevTime.hours + Math.floor(updateMinutes / 60);

               return {
                  hours : updateHours % 24,
                  minutes : updateMinutes % 60,
                  seconds : updateSeconds % 60,
               }
            })
         }, 10.5)
         setIntervalId(timer)
      } else{
         clearInterval(intervalId)
      }
      return ()=> clearInterval(timer);      
   },[isActive, isPause])
   
   const handleClick = ()=> {
      
      setIsActive(true)
      setIsPause(!isPause)
     
   }

   const handleReset = ()=> {
      setIsActive(false)
      setIsPause(true)
      setTime({ hours:0, minutes: 0 ,seconds: 0})
      clearInterval(intervalId)
   }

    console.log(time.seconds)

  return (
    <div className='chron'>
      <h2>{`${time.hours.toString().padStart(2, 0)} : ${time.minutes.toString().padStart(2, 0)} : ${time.seconds.toString().padStart(2, 0)}`}</h2>
     <div>
        <button className='reset' onClick={handleReset}>Reset</button>
        <button onClick={()=>handleClick()}>{ isActive ? 'Pause' : 'Play'}</button>
     </div>
    </div>
  )
}

export default Chrono
