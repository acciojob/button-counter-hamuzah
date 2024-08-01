
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const[count,setCount] = useState(0)

  function clickB(e){
    e.preventDefault()
    setCount(count + 1)
  }
   
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button Clicked {count} times</p>
        <button onClick={clickB}>Click me</button>
    </div>
  )
}

export default App
