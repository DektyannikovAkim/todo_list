import { Todolist } from "./components/TodoList";
import { TodoStoreProvider } from "./store/todos";

export function App() {
  return (
    <div className="parant">
      <TodoStoreProvider>
        <Todolist />
      </TodoStoreProvider>
    </div>
  );
}
