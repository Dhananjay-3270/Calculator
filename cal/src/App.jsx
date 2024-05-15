import { useState } from "react";
import "./App.css";

function App() {
 

  const [input, setInput] = useState("");
  const[result,setResult] = useState("")
  const handlechange = (event)=>{
    setInput((prevInput) => prevInput + event.target.value);
    console.log(input)
  }
  const calculateResult = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };
  return (
    <>
      <h1>React Calculator</h1>
      <input type="text" value={input} />
      <div>{result}</div>
      <div className="container">
        <div>
          <button value={"7"}
         onClick={()=>handlechange(event)}
          >
            7
          </button>
        </div>
        <div>
          <button value={"8"}
         onClick={()=>handlechange(event)} >8</button>
        </div>
        <div>
          <button value={"9"}
         onClick={()=>handlechange(event)}>9</button>
        </div>
        <div>
          <button value={"+"}
         onClick={()=>handlechange(event)}>+</button>
        </div>
        <div>
          <button value={"4"}
         onClick={()=>handlechange(event)}>4</button>
        </div>
        <div>
          <button value={"5"}
         onClick={()=>handlechange(event)}>5</button>
        </div>
        <div>
          <button value={"6"}
         onClick={()=>handlechange(event)}>6</button>
        </div>
        <div>
          <button value={"-"}
         onClick={()=>handlechange(event)}>-</button>
        </div>
        <div>
          <button value={"1"}
         onClick={()=>handlechange(event)}>1</button>
        </div>
        <div>
          <button value={"2"}
         onClick={()=>handlechange(event)}>2</button>
        </div>
        <div>
          <button value={"3"}
         onClick={()=>handlechange(event)}>3</button>
        </div>
        <div>
          <button value={"*"}
         onClick={()=>handlechange(event)} >*</button>
        </div>
        <div>
          <button
            onClick={() => {
             setInput(""),
             setResult("");
            }}
          >
            C
          </button>
        </div>
        <div>
          <button value={"0"}
         onClick={()=>handlechange(event)}>0</button>
        </div>
        <div>
          <button value={"="}
         onClick={()=>calculateResult()}>=</button>
        </div>
        <div>
          <button value={"/"}
         onClick={()=>handlechange(event)}>/</button>
        </div>
      </div>
    </>
  );
}

export default App;
