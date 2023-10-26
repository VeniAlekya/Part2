import React,{useState} from 'react';

function ButtonApp() {
    const [counter, setCounter] = useState(0);
  const handleClick=()=>{
    setCounter(counter+1);
  console.log("Button clicked",counter+1);
  const [counter1, setCounter] = useState(0);
  const handleClick2=()=>{
    setCounter(counter1-1);
  console.log("Button clicked",counter1-1);
  }
  };    
  return (
    <div>
    {counter}<br/>
      <button onClick={()=>handleClick()}>Addtocart</button>
      <button onClick={()=>handleClick2()}>Delete from cqart</button>
      </div>
  )
}
export default ButtonApp;
