import React ,{useState} from 'react'
import { appStore } from '@/store/appStore'
const A = () => {
 const  [name,setName]=useState("")
  const fnChange = (eve) =>{
setName(eve.target.value)
  }
const fnNameClick = ()=>{

  appStore.dispatch({
    type:"Name_UPDATE",
    payload:name

  })
}
  return (
    <div>
      <p>Name: <input onChange={fnChange}/></p>
      <button onClick = {fnNameClick}>click</button>
    </div>
  )
}

export default A
