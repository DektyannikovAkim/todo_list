import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { TodoStoreContext } from "../../store/todos";
import { InputArea } from "../InputArea";
import { TodoItem } from "./Item";
import * as styles from "./style";

export const Todolist = observer(() => {
  const context = useContext(TodoStoreContext);
  return (
    <div>
      <styles.Header>Todo List</styles.Header>
      <InputArea></InputArea>
      <styles.TodoList>
        {context.todos.length
          ? context.todos.map((todo) => <TodoItem todo={todo} key={todo.id} />)
          : "You have no entries yet :("}
      </styles.TodoList>
    </div>
  );
});
