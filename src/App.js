import logo from './logo.svg';
import './App.css';
import dice1 from './images/dice1.svg';
import dice2 from './images/dice2.svg';
import dice3 from './images/dice3.svg';
import dice4 from './images/dice4.svg';
import dice5 from './images/dice5.svg';
import dice6 from './images/dice6.svg';
import { useState } from 'react';



function App() {
  const [result, setResult] = useState()

  var dicePics = [
    dice1,
    dice2,
    dice3,
    dice4,
    dice5,
    dice6

  ]
  const [image,setDie] = useState(dicePics[0]);
  const [image2,setDie2] = useState(dicePics[1]);
  const rollDice= () => {
  var random1 = Math.floor(Math.random() * 6);
  var random2 = Math.floor(Math.random() * 6);
  setDie(dicePics[random1]);
  setDie2(dicePics[random2]);
var rollResult = ((random1+1) + (1+random2)) 
console.log(rollResult)

setResult(rollResult)
  }



  return (

    <div className="App">
     <center>
      <h1>DICE ROLLER</h1>
      <div className='container'>
        <img className='square' src={image}></img>
        {/* <div style={{width: "10px",display: "inline-block"} }></div> */}
        <img className='square'src={image2}></img>

      </div>
      <button type="button" class="btn btn-success" onClick={rollDice}>LETS ROLL</button>
<h2>{result}</h2>
     </center>
    </div>
  );
}

export default App;
