import React, { useEffect, createContext, useContext, useReducer,Dispatch } from 'react';
import todolistService from "../services/todolist/todolist.service";
import { todoReducer, TodoAction } from './reducer';

export const TodoContext = createContext<{allTodos:any[], filteredTodos: any[];} | undefined>(undefined);;
export const TodoDispatchContext = createContext<Dispatch<TodoAction> | undefined>(undefined);

export const TodoContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(todoReducer,{
		allTodos: [],
		filteredTodos: []
	});
	useEffect(() => {
		todolistService.getTodoList().then(response => {
			dispatch({ type: 'set_data', data: response?.data || [] });
        });
    }, []);
	return(
		<TodoContext.Provider value={ state.filteredTodos }>
			<TodoDispatchContext.Provider value={ dispatch }>
				{children}
			</TodoDispatchContext.Provider>
		</TodoContext.Provider>
	)
};

export const useTodo = () => {
	const context = useContext(TodoContext); 
	if (!context) {
        throw new Error("useTodo must be used within a TodoProvider");
    }
    return context;
};
export const useTodoDispatch = () => {
	const context = useContext(TodoDispatchContext);
	if (!context) {
		throw new Error("useTodoDispatch must be used within a TodoProvider");
	}
	return context;
};
