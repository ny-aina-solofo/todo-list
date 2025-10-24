export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'set_data': 
            return {
                ...state,  
                allTodos: action.data, 
                filteredTodos: action.data 
            };
    
        case 'add_item': 
            const maxRang = state.allTodos.length > 0
                ? Math.max(...state.allTodos.map(todo => Number(todo.rang) || 0)) : null;

            const newTodo = {
                id: Date.now(),
                libelle: action.libelle,
                done: 0,
                rang: maxRang + 1,
            };

            const updatedTodos = [...state.allTodos, newTodo];

            return {
                ...state,
                allTodos: updatedTodos,
                filteredTodos: updatedTodos,
            };
        

        case 'delete_item':
            const deleteItems = state.allTodos.filter(todo => todo.id !== action.id);
            return { 
                allTodos: deleteItems, 
                filteredTodos: deleteItems 
            };

        case 'update_checkbox':
            const updateCheckbox = state.allTodos.map(todo => 
                todo.id !== action.id ? todo : { ...todo, done: !todo.done }
            );
            return { 
                allTodos: updateCheckbox, 
                filteredTodos: updateCheckbox 
            };

        case 'display_all_items':
            return { 
                ...state, 
                filteredTodos: state.allTodos 
            };
        
        case 'display_active_items':
            return { 
                ...state, 
                filteredTodos: state.allTodos.filter(todo => todo.done === 0) 
            };

        case 'display_completed_items':
            return { 
                ...state, 
                filteredTodos: state.allTodos.filter(todo => todo.done === 1) 
            };
        case 'clear_completed_items':
            const clearCompletedList = state.allTodos.filter(todo => todo.done === 1);
            return { 
                allTodos: clearCompletedList, 
                filteredTodos: clearCompletedList 
            };
        case 'drag_and_drop':
            return { 
                allTodos: action.updatedList, 
                filteredTodos: action.updatedList 
            };
        default:
            throw Error('Unknown action: ' + action.type);
    }
};
