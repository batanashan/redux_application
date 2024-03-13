
import React from 'react'
import { connect } from 'react-redux'

let C = (props) => {
    const {name,loc} =props
  return (
    <div>
      <h3>Name:---{name}</h3>
      <h3>Loc:------{loc}</h3>
    </div>
  )
}

C = connect(
(state)=>{
    const {name,loc} = state.appReducer
    return {
        name ,
        loc
    }

}
)(C)

export default C
