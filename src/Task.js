import React from 'react'
import { Link } from 'react-router-dom'

function Task({props}) {
  return (
    <div className='task'>
    <h6>id:{props.id}</h6>
    <p className='desc'>des:{props. description}</p>
    <Link to={`/Edite/${props.id}`}> <button style={{backgroundcolor:"red"}}>Edit</button></Link>
    <input type='checkbox' checked={props.isdone}/>
    </div>
  )
}

export default Task