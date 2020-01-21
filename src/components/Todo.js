import React,{useState,useReducer} from 'react'

const initializeState=[{
    item:'Learn about reducers',
    completed:false,
    id:1  
}]

const todoReducer=(state,action)=>{
    return state
}




export const Todo = () => {
    const [state,dispatch]=useReducer(todoReducer,initializeState)
    return (
        <div>
            
        </div>
    )
}
