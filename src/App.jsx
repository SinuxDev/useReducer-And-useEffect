import { useEffect, useState } from "react";

function App() {

  const [products,setProducts] = useState([]);

  useEffect(() => {

  },[])

  const getProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products/');
    const data = await response.json();
    return data;
  }

  return (
    <section>
      <h1>Hello React</h1>
    </section>
  );
}

export default App;
