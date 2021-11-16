import { Todolist } from "./components/TodoList";
import { TodoStoreProvider } from "./store/todos";
import * as styles from "./style";

export function App() {
  return (
    <styles.Parant>
      <TodoStoreProvider>
        <Todolist />
      </TodoStoreProvider>
    </styles.Parant>
  );
}
