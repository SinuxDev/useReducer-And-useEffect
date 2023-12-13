import { useEffect, useState } from "react";

function App() {
  const [key,setKey] = useState("");
  useEffect(()=>{
    console.log("I'm useEffect Hooks");
  },[]);

  return (
    <div>
      <h1> Your key is -  {key}  </h1>
      <input type="text" onChange={(e)=>{
        setKey(e.target.value);
      }} />
    </div>
  );
}

export default App;
