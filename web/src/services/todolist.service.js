class TodoListService {
    // --- clé utilisée dans le localStorage ---
    STORAGE_KEY = "todolist";

    getTodoList() {
        const todos = localStorage.getItem(this.STORAGE_KEY);
        return todos ? JSON.parse(todos) : [];
    }

    insertTodoList(libelle) {
        const todos = this.getTodoList();
        const newTodo = {
            id: Date.now(),
            libelle,
            done: false,
            rang:todos.length + 1
        };
        todos.push(newTodo);
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(todos));
        return newTodo;
    }

    deleteTodoList(id) {
        let todos = this.getTodoList();
        todos = todos.filter(todo => todo.id !== id);
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(todos));
    }

    updateCheckbox(id, done) {
        const todos = this.getTodoList();
        const updated = todos.map(todo =>
            todo.id === id ? { ...todo, done } : todo
        );
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updated));
    }

    updateTodoListOrder(updatedList) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updatedList));
    }

    clearCompleted() {
        let todos = this.getTodoList();
        todos = todos.filter(todo => todo.done === false);
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(todos));    
    }


}

export default new TodoListService();
