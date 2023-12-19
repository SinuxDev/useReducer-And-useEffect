import { useEffect, useState } from "react";
import useToggle from "./hooks/useToggle";

function App() {
  
  // const [isShow,toggle] = useToggle();
  const {state : isShow, toggle} = useToggle();

  return (
    <>
     <section>
        <button onClick={toggle} >{isShow ? "hide": "show"}</button>
        {
          isShow && <h1>Showing!</h1>
        }
      </section> 
    </>
  );
}

export default App;
