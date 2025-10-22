import React, { useEffect, createContext, useContext, useReducer,Dispatch } from 'react';
import { todoReducer, TodoAction } from './reducer';

export const TodoContext = createContext<{allTodos:any[], filteredTodos: any[];} | undefined>(undefined);;
export const TodoDispatchContext = createContext<Dispatch<TodoAction> | undefined>(undefined);

export const TodoContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, dispatch] = useReducer(todoReducer,{
		allTodos: [],
		filteredTodos: []
	});
	useEffect(() => {
		(async () => {
			try {
				const todos = await window.electronAPI.getTodoList();
				dispatch({ type: 'set_data', data: todos });
			} catch (err) {
				console.error('Erreur chargement todos:', err);
			}
		})();
    }, []);
	return(
		<TodoContext.Provider value={ state }>
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
