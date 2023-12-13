import { useEffect, useState } from "react";

function App() {
  const [key,setKey] = useState("");
  const [count,setCount] = useState(0);
  
  return (
    <div className="App" >
      <input type="text" onChange={(e)=>{
        setKey(e.target.value);
      }} />
      <h1> Your key is -  {key}  </h1>
      <button>-</button>
      <span> {count} </span>
      <button>+</button>
    </div>
  );
}

export default App;
