import { Main } from "./components/Main/Main"
import { TodoContextProvider } from "./context/context"

export default function TodoListApp() {
    return (
        <TodoContextProvider>
            <Main/>            
        </TodoContextProvider>
    )
}
