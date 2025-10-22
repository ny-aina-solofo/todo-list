import React from "react";
import { useTodoDispatch } from "../../context/context";
import Checkbox from "../Checkbox/Checkbox";
import iconCross from '../../assets/icon-cross.svg';

type TodoProps = {
    todo : any;
};

export const TodoItem = ({todo}:TodoProps) => {
    const dispatch = useTodoDispatch();
    const deleteTodoList = (id:any)=>{
        dispatch({ type: 'delete_item', id : id });
        // todolistService.deleteTodoList(id).then((response)=>{});
    }
    return (
        <div 
            className="
                group flex justify-between items-center cursor-pointer border-b 
                px-5 sm:px-6 py-4 sm:py-5 border-Light-Light-Grayish-Blue 
                dark:border-Dark-Very-Dark-Grayish-Blue  
            "
        >
            <div className="flex items-center gap-[12px] sm:gap-6">
                <Checkbox todo={todo}/>
                <span 
                    className={`
                        ${todo.done ? 
                            "line-through text-Light-Dark-Grayish-Blue dark:text-Dark-Very-Dark-Grayish-Blue " 
                            : 
                            "text-Light-Very-Dark-Grayish-Blue dark:text-Dark-Light-Grayish-Blue"
                        }
                    `}
                >
                    {todo.libelle}
                </span>   
            </div>
            <img
				src={iconCross}
				alt="delete icon"
                className="
                    ml-4 w-[14px] sm:w-[18px] h-[14px] sm:h-[18px] sm:invisible 
                    sm:group-hover:visible cursor-pointer
                "
				onClick={()=>deleteTodoList(todo._id)}
            />
        </div>
    )
}