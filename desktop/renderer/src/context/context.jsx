import React, { useEffect, createContext, useContext, useReducer } from 'react';
import { todoReducer } from './reducer';

export const TodoContext = createContext(null);
export const TodoDispatchContext = createContext(null);

export const TodoContextProvider = ({ children }) => {
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
		<TodoContext.Provider value={ state.filteredTodos }>
			<TodoDispatchContext.Provider value={ dispatch }>
				{children}
			</TodoDispatchContext.Provider>
		</TodoContext.Provider>
	)
};

export const useTodo = () => useContext(TodoContext);
export const useTodoDispatch = () => useContext(TodoDispatchContext);
