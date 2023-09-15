import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { checked, searchh } from './Redux/actions/Action'

function Search() {
  const [Searche,setSearche] = useState(true)
  const Dispatch=useDispatch()
  const handlclick=()=>{
    setSearche(!Searche)
    Dispatch(checked(Searche))
  }
  return (
    <div>
    <input
    type="text"
    placeholder="Search by description"
    onChange={(e)=>Dispatch(searchh(e.target.value))}
    />
    <input
 type='checkbox'

 onClick={handlclick}

/>

    
    </div>
  )
}

export default Search