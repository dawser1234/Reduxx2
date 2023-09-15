
import { DESC, Edit, add, search } from "../const/Const";

const initialstate = {
  data: [
    {
      id: 0,
      description: "cyrine",
      isdone: false
    },
    {
      id: 1,
      description: "dawser",
      isdone: true
    },
    {
      id: 2,
      description: "hamza",
      isdone: true
    }
  ]
};

export const TodoReducers = (state = initialstate, action) => {
  switch (action.type) {
    case add:
      return {
        ...state,
        data: [...state.data, { ...action.payload, id: state.data.length }],
      };
    case Edit:
      return {...state,data:state.data.map((el)=> el.id == action.payload.id ? {description:action.payload.desc,id:action.payload.id,isdone:action.payload.isDoneEdit } : el)}
      case search:
            return {...state,data:state.data.filter((el)=>el.isdone==action.payload.done)}
        case DESC:
            return{...state,data:state.data.filter((el)=>el.description.toLowerCase().includes(action.payload.desc.toLowerCase()))}
        
    default:
      return state;
  }
};
