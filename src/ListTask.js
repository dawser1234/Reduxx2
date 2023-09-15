import React from 'react'
import Task from './Task'
import { useSelector } from 'react-redux'

function ListTask() {
  const info=useSelector(state=>state.data)
  console.log(info)
  return (
    <div>
    {info.map((el) => <Task props={el} />)}
    </div>
  )
}

export default ListTask