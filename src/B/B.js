import { appStore } from "@/store/appStore"
import React ,{useState} from "react"

const B = () => {
    const  [loc,setLoc]=useState("")
     const fnChange = (eve) =>{
   setLoc(eve.target.value)
     }
   const fnNameClick = ()=>{
 appStore.dispatch({
    type:"LOC_UPDATE",
    payload:loc
 })
   }
     return (
       <div>
         <p>Name: <input onChange={fnChange}/></p>
         <button onClick = {fnNameClick}>click</button>
       </div>
     )
   }
   
   export default B
   