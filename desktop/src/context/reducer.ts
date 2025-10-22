import { TodolistType } from "@/types/todolist";

export interface TodoState {
    allTodos: any[];
    filteredTodos: any[];
}
export type TodoAction =
    | { type: "set_data"; data: any[] }
    | { type: "delete_item"; id: number }
    | { type: "update_checkbox"; id: number }
    | { type: "display_all_items"}
    | { type: "display_active_items"}  
    | { type: "display_completed_items"}  
    | { type: "clear_completed_items"}  
    | { type: "drag_and_drop",updatedList:any[]}  

export const todoReducer = (state : TodoState , action : TodoAction) => {
    switch (action.type) {
        case 'set_data': // Initialisation avec les données récupérées
            return {
                ...state, 
                allTodos: action.data, 
                filteredTodos: action.data 
            };

        case 'delete_item':
            const deleteItems = state.allTodos.filter((todo:TodolistType) => todo.id !== action.id);
            return { 
                allTodos: deleteItems, 
                filteredTodos: deleteItems 
            };

        case 'update_checkbox':
            const updateCheckbox = state.allTodos.map((todo:TodolistType) => 
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
                filteredTodos: state.allTodos.filter((todo:TodolistType) => todo.done === false) 
            };

        case 'display_completed_items':
            return { 
                ...state, 
                filteredTodos: state.allTodos.filter((todo:TodolistType) => todo.done === true) 
            };
        case 'clear_completed_items':
            const clearCompletedList = state.allTodos.filter((todo:TodolistType) => todo.done === false);
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
            throw Error('Unknown action: ' + action);
    }
};
