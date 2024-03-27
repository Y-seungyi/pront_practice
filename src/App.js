import Button from "./Button";
import styles from "./App.module.css";

import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKey] = useState("");
  const onClick = () => setValue((prev) => prev +1);
  const onChange = (event) => setKey(event.target.value);
  console.log("i run all time");
  useEffect(() => {
    console.log("asd");
  },[])
  useEffect(() =>{
  if(keyword !== "" && keyword.length>=5)
  console.log("searchfor",keyword)
  },[keyword]);
  return (
    <div >
      <input 
        value={keyword}
        onChange={onChange}
        type="text" 
        placeholder="search here"></input>
      <h1>{counter}</h1>
      <button onClick={onClick} >click me</button>
    </div>
  );
}

export default App;
