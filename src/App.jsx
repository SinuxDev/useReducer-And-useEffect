import { useState } from "react";

function App() {
    const [id,setID] = useState("");
    const [error,setError] = useState(false);
    const [toDo,setTodo] = useState(undefined);

    const getData = async (e) =>{
      e.preventDefault();
      if( id < 1 ){
        setError(true);
        setID("");
        return;
      }
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
      const data = await response.json();
      setError(false);
      setTodo(data);

      setID("");
    }

    return (
      <section>
          <form action="" onSubmit={getData} >
            <input type="text" value={id} onChange={(e)=>{
              setID(e.target.value);
            }} />
            <button type="submit">Get Data</button>
          </form>
         <div>
            {
              error && <h1>Pleas Enter Valid ID Number Eg. 1, 2, 3 </h1>
            }

            {
              toDo && (<di>
                <h1> User ID : {toDo.userId} </h1>
                <h1> User Title :  {toDo.title} </h1>
                <h1> ID :  {toDo.id} </h1>
                <h1> 
                  Completed - {""}
                  {
                  toDo.completed ? (<span>Done</span>) : (<span>None</span>)
                  } </h1>
              </di>)
            }
         </div>



      </section>
    );



}

export default App;
