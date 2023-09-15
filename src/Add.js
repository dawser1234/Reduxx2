import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AddTask } from './Redux/actions/Action';




function Add() {
  const [id, setId] = useState('');
  const [description, setDescription] = useState('');
  const [isDone, setIsDone] = useState(false);
  const navigate = useNavigate();
  const Disptach=useDispatch()
 const  handleClick=()=>{

if(description){
  Disptach(AddTask (description,isDone))
    navigate('/')

}
else{alert("input is empty ")}
  }


  return (
    <div>
      <h2>Add Task</h2>
      
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label>
        <input
          type="checkbox"

          onChange={() => setIsDone(!isDone)}
        />
        Is Done
      </label>
      <button  style={{backgroundColor:"bisque"}} onClick={handleClick}   >Add</button>
    </div>
  );
}

export default Add;
