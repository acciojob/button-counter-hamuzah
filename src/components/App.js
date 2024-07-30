
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const[count,setCount] = useState(0)
   
  const handleCount = () => {
    setCount(count + 1)
  }
    
  return (
    <div>
        {/* Do not remove the main div */}
        <p>{count}</p>
        <button onClick={handleCount}>Click here</button>
    </div>
  )
}

export default App
