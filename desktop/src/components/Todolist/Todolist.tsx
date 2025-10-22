import React,{ ReactEventHandler, useContext, useEffect, useState} from "react"
import { TodoItem } from "../TodoItem/TodoItem";
import { useTodo ,useTodoDispatch } from "../../context/context";
import { TodolistType } from "@/types/todolist";

export default function Todolist() {
    const { filteredTodos } = useTodo(); 
    const dispatch = useTodoDispatch();
    const [draggedTodo, setdraggedTodo] = useState<number | null>(null);
        			

    const dragStart = (index:number)=>{
        setdraggedTodo(index);
    }
    const dragOver = (e: React.DragEvent<HTMLLIElement>)=>{
        e.preventDefault(); 
    }
    const drop = (index:number)=>{
        if (draggedTodo === null) return;
        const reorderedList = [...filteredTodos];
        const [draggedItem] = reorderedList.splice(draggedTodo,1); 
        reorderedList.splice(index,0,draggedItem);
        const updatedList = reorderedList.map((todo:TodolistType,order:number)=>({...todo, rang : order.toString()}));
        dispatch({ type : 'drag_and_drop', updatedList : updatedList});
        setdraggedTodo(null);
        // todolistService.updateTodoListOrder(updatedList).then((response)=>{});
    }

    return (
        <div className="bg-white rounded-t-md dark:bg-Dark-Very-Dark-Desaturated-Blue shadow-2xl">            
            {filteredTodos.length > 0 ? (
                <div>
                    {filteredTodos.map( (todo,index) =>
                        <li 
                            key={todo.id} draggable  
                            onDragStart={()=>dragStart(index)}
                            onDragOver={dragOver}
                            onDrop={()=>drop(index)}
                            className={`
                                list-none cursor-move transition-all duration-200 ease-in-out 
                                hover:bg-Light-Very-Light-Grayish-Blue dark:hover:bg-Light-Dark-Grayish-Blue
                                ${draggedTodo === index ? 'opacity-50 scale-95 ring-2 ring-blue-400' : ''}
                            `}
                        >
                            <TodoItem todo={todo}/>
                        </li>
                    )}
                </div>
            ) : (
                <p className="text-center text-sm text-Light-Dark-Grayish-Blue 
                dark:text-Dark-Very-Dark-Grayish-Blue">
                    liste vide
                </p>
            )}
        </div>
    )
}
