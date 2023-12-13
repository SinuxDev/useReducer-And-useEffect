import { useEffect, useState } from "react";

function App() {
    useEffect( () => {
        async function fetchData(){
          const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
          const data = await response.json();
          console.log(data);
        }
        fetchData();
    },[]);

    return (
      <>
        <h1>Hello React</h1>
      </>
    );



}

export default App;
