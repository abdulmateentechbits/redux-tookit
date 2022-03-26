import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:"todo",
    initialState:[
        {id:1,title:"Todo--1",completed:false},
        {id:2,title:"Todo--2",completed:true},
        {id:3,title:"Todo--3",completed:true},
        {id:4,title:"Todo--4",completed:false},
    ],reducers:{
        addTodo:(state,action)=>{
            const newTodo={
                id:Date.now(),
                title:action.payload.title,
                completed:false
            }
            state.push(newTodo);
        },deleteTodo:(state,action)=>{
            return state.filter((todo)=>todo.id!==action.payload.id);
        },toggleCompleteTodo:(state,action)=>{
         const index =state.findIndex((data)=>data.id===action.payload.id);
         state[index].completed=action.payload.completed;       
        }

    }

});

export const {addTodo,deleteTodo,toggleCompleteTodo} =todoSlice.actions;
export default todoSlice.reducer;



