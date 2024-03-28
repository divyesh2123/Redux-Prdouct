import {TodoModel,TodoArrayModel} from "../models/redux-models";
import { createSlice,PayloadAction } from "@reduxjs/toolkit";

const initialTodoState:TodoArrayModel={
    all_todos:[],
    particular_todo:{    
       
        "id": 0,
        "title": "",
        "description": "",
        "price":0
        
    }
}

const todoSlice=createSlice({
    name:'todo',
    initialState:initialTodoState,
    reducers:{
        setTodos(state,action:PayloadAction<TodoModel[]>){
            state.all_todos=action.payload;
        },
        setParticularTodo(state,action:PayloadAction<TodoModel>){
            state.particular_todo=action.payload;
        }
    }
})
export default todoSlice;