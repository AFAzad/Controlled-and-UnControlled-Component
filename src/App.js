// import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import User from './User';

function App() {
  const [val,setVal]=useState('')
  const [data,setData]=useState('')
  return (
    <div className="App">
      <h1>Controlled Component</h1>
      <input type="text" value={val}onChange={(e)=>setVal(e.target.value)} placeholder="F.Name"/>
      <input type="text" value={data}onChange={(e)=>setData(e.target.value)} placeholder="L.Name"/>
      <h3>First Name:  {val}</h3>
      <h3>Last Name:  {data}</h3>
      <button onClick={()=>('Submited Successfully')}>Submit</button>
      <User/>
    </div>
  );
}

export default App;
