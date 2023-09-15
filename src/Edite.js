import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { EdiTT } from './Redux/actions/Action';

function Edite() {
  const obj = useParams();
  const modification = useSelector(state => state.data.find(el => el.id == obj.id));

  const [taskEdit, setTaskEdit] = useState(modification.description);
  const [isDoneEdit, setIsDoneEdit] = useState(modification.isdone); // Added state for "Is Done"
  

  const dispatch = useDispatch();

  const handleEditClick = () => {
    dispatch(EdiTT(taskEdit,obj.id,isDoneEdit));
  };

  return (
    <div>
      <h2>Edit</h2>
      <input
        onChange={e => setTaskEdit(e.target.value)}
        type="text"
        placeholder="Description"
        value={taskEdit}
      />
      <label>
        <input
          type="checkbox"
         
          onClick={(e) => setIsDoneEdit(!isDoneEdit)}
            checked={isDoneEdit}
          // Handle "Is Done" checkbox
          
        />
        Is Done
      </label>
      <Link to={"/"}>
      <button onClick={handleEditClick} style={{ backgroundColor: 'bisque' }}>
        Edit
      </button>
      </Link>
    </div>
  );
}

export default Edite;
