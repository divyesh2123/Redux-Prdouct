import { useAppDispatch,useAppSelector } from "../hooks/redux-hooks";
import {fetchTodos,fetchParticularTodo} from '../store/todo-actions';
import {useEffect, useState} from 'react'
import './Todo.css'
import { Link } from "react-router-dom";

const Todo=()=>{
    const [todo_id,setTodo_id]=useState(1);
    const dispatch=useAppDispatch();
    const alltodos=useAppSelector(state=>state.todo.all_todos);
    const particularTodo=useAppSelector(state=>state.todo.particular_todo);
   

    useEffect(()=>{

        dispatch(fetchTodos())

    },[])
    const searchHandler=()=>{
        dispatch(fetchParticularTodo(todo_id))
    }
    const checkTodo=():boolean=>{
        if(alltodos.length==0){
            return false
        }
        return true
    }
   
    
    return(
        <>
           
            <div>
               
                <div>
                    <h3>TODO LIST :</h3>
                        <div className="todo-container">
                                    <p className="todo-child1">ID</p>
                                    <p className="todo-child2">USER ID</p>
                                    <p className="todo-child3">TITLE</p>
                                    <p className="todo-child3">TITLE</p>
                        </div>
                        {checkTodo() &&
                            alltodos.map((todo)=>(
                                <div className="todo-container" key={todo.id}>
                                    <p className="todo-child1">{todo.id}</p>
                                    <p className="todo-child2">{todo.price}</p>
                                    <p className="todo-child3">{todo.title} <Link to={"product/"+ todo.id}>Details</Link></p>
                                    
                                </div>
                            ))
                        }
                </div>
            </div>
        </>

    );
}
export default Todo;