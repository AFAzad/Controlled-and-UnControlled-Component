import './App.css';
import React,{useRef}from 'react'

function User(){
    let inputRef=useRef(null)
    let inputRef2=useRef(null)

    function submitForm(e)
    {
        e.preventDefault()
        console.warn("input field 1 value: ",inputRef.current.value)
        console.warn("input field 2 value: ",inputRef2.current.value)
    }
    return(
        <div className="uncomp">
           <form onSubmit={submitForm}>
           <h1>UnControlled Component</h1>
            <input ref={inputRef} type="text" /> <br /><br />
            
            <input ref={inputRef2} type="text" />  <br /><br />
            <button>Submit</button>

           </form>
        </div>
    )
}
export default User