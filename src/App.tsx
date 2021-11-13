import { Todolist } from "./components/TodoList/TodoList";
import { TodoStoreProvider } from "./store/todos";
import * as styles from "./style";

export function App() {
  return (
    <styles.parant>
      <TodoStoreProvider>
        <Todolist />
      </TodoStoreProvider>
    </styles.parant>
  );
}
