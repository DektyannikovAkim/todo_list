import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { TodoStoreContext } from "../../store/todos";
import { InputArea } from "../InputArea/InputArea";
import { TodoItem } from "./Item/TodoItem";
import * as styles from "./style";

export const Todolist = observer(() => {
  const context = useContext(TodoStoreContext);
  return (
    <div>
      <styles.header>Todo List</styles.header>
      <InputArea></InputArea>
      <styles.todoList>
        {context.todos.length
          ? context.todos.map((todo) => <TodoItem todo={todo} key={todo.id} />)
          : "You have no entries yet :("}
      </styles.todoList>
    </div>
  );
});
