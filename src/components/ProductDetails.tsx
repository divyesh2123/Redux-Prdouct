import { useAppDispatch,useAppSelector } from "../hooks/redux-hooks";
import {fetchTodos,fetchParticularTodo} from '../store/todo-actions';
import {useEffect, useState} from 'react'
import './Todo.css'
import { useParams } from "react-router-dom";

const ProductDetails=()=>{
    let { productId } = useParams();
    const dispatch=useAppDispatch();
 
    const particularTodo=useAppSelector(state=>state.todo.particular_todo);
   

    useEffect(()=>{

        let p :string = productId || "";
        let d: number = parseInt(p);

       

        dispatch(fetchParticularTodo(d))

    },[])
    
   
   
    
    return(
        <>
           
            <div>
               {particularTodo.description}
               {particularTodo.id}
               {particularTodo.title}
            
            </div>
        </>

    );
}
export default ProductDetails;