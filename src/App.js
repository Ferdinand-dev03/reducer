import { useState } from 'react';
import Card from './component/Card';
import Pack from './component/Pack';
import Perso from './component/Personnaliser';
import Description from './component/Description';
import Chrono from './component/Chrono';
import Reducer from './Reducer/Reducer';

const card = 22500

function App() {

  const [price , setPrice] = useState(card)

  const [controleur, setControleur] = useState(price);
 
  

  return (
    <div className="App">
      {/* <Card />
     <div className='Apps'>
        <Description controleur={controleur}/>
        <Pack  onSetcont={setControleur} controle={controleur} price={controleur} />
        <Perso  onSetcont={setControleur} price={controleur}/>
      </div> */}
      {/* <Chrono/> */}
      <Reducer/>
    </div>
  );
}

export default App;


