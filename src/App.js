import Firstbody from './Components/Firstbody';
import './App.css';
import Secondbody from './Components/Secondbody';
import React,{useState} from 'react'
const data=[1,2,3,4,5]
function App() {
  const[change,setChange]=useState(true)
  const[vile,setVile]=useState('')
  function Node(name){
    setVile(name)
  }
  function Peace(name){
    setChange(name)
  }
  return (
    <div className="App">
     {change? <Firstbody data={data} peace={Peace} del={Node}/>:<Secondbody data={vile}/>}
    
    </div>
  );
}

export default App;
