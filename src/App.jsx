import { useState } from "react";

function App() {
    const [id,setID] = useState("");

    const getData = async (e) =>{
      e.preventDefault();
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
      const data = await response.json();
      console.log(data);
    }

    return (
      <section>
          <form action="" onSubmit={getData} >
            <input type="text" value={id} onChange={(e)=>{
              setID(e.target.value);
            }} />
            <button type="submit">Get Data</button>
          </form>
      </section>
    );



}

export default App;
