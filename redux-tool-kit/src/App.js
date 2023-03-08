import './App.css';
import { useState } from "react";

function App() {

  const[count, setCount]= useState(0);

  const increaseCount=()=>{
    setCount(count +1);
  }




const[showText,setShowText]= useState(false);
const[inputValue, setInputValue]= useState("");

const handleInputChange=(event)=>{
  setInputValue(event.target.value);
}

return(

  <div className='App'>

  <h1>Question 1: </h1>
  <h1>{count}</h1>
  <h1><button onClick={increaseCount}>IncreaseCount</button></h1>


  <h1>Question 2:</h1>
  <h1>Enter your First Name :</h1> <input type="text" onChange={handleInputChange}/>
  <button onClick={()=>{
    setShowText(!showText);
  }}
  >
  Display Text</button>
  {showText && <h1>{inputValue}</h1>}
  </div>
)
  
};

  


export default App;
