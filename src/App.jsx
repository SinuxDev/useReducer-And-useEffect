import { useEffect } from "react";

function App() {
  
  useEffect(()=>{
    console.log("I'm useEffect Hooks");
  },[])

  return (
    <div>
      <h1>Hello React</h1>
    </div>
  );
}

export default App;
