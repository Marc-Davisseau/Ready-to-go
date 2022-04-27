import './App.css';
import { useState } from "react";

// setSwitch1(switch1) = name


function App() {


  const [switch1, setSwitch1] = useState(true);
  const [switch2, setSwitch2] = useState(true);
  const [switch3, setSwitch3] = useState(true);

  
  return (

 <div className="GlobalApp">

   <header><h1>Ready To Go</h1></header>
  
    <div className="App">


<div className='Left'>

<button className='B1' onClick={()=>setSwitch1(!switch1)}> 
<button className='buttone1' style = {{color:switch1===true?"var(--blue)":"white", background:switch1===true?"white":"var(--blue)"}} >ON</button> 
<button className='buttone2' style = {{color:switch1===true?"white":"var(--blue)", background:switch1===true?"var(--blue)":"white"}} >OFF</button> 
        </button>
  
        <button className='B1' onClick={()=>setSwitch2(!switch2)}> 
<button className='buttone1' style = {{color:switch2===true?"var(--blue)":"white", background:switch2===true?"white":"var(--blue)"}} >ON</button> 
<button className='buttone2' style = {{color:switch2===true?"white":"var(--blue)", background:switch2===true?"var(--blue)":"white"}} >OFF</button> 
        </button>


        <button className='B1' onClick={()=>setSwitch3(!switch3)}> 
<button className='buttone1' style = {{color:switch3===true?"var(--blue)":"white", background:switch3===true?"white":"var(--blue)"}} >ON</button> 
<button className='buttone2' style = {{color:switch3===true?"white":"var(--blue)", background:switch3===true?"var(--blue)":"white"}} >OFF</button> 
        </button>
        </div>
<div className='Right'>

        <button className='B2' onClick={()=>setSwitch4()}> 
<button className='buttone3' style = {{background:(switch1===false&&switch2===false&&switch3===false)?"#46AC4A":"#D34849",display:(switch1===false&&switch2===false&&switch3===false)?"none":""}} >No way !</button> 
<button className='buttone3' style = {{background:(switch1===false&&switch2===false&&switch3===false)?"#46AC4A":"#D34849",display:!(switch1===false&&switch2===false&&switch3===false)?"none":""}} >Go !</button> 

        </button>
        </div>



   </div>

<footer>
Made with <span> React</span> at <span> Le Reacteur </span> By  <span> Marc  </span>
</footer>


</div>



  )



}

export default App
