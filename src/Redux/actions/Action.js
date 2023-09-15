import { DESC, Edit, add,search } from "../const/Const"


export const AddTask=(desc,Done)=>{
    return {
        type:add,payload:{description:desc,isdone:Done}

    }
}
export const EdiTT=(desc,id,isDoneEdit)=>{
    return {type:Edit,payload:{desc,id,isDoneEdit}}
}
export const checked=(done)=>{
    return {type:search,payload:{done}}
}
export const searchh=(desc)=>{
    return {type:DESC ,payload:{desc}}
    }
