import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { TodoStoreContext } from "../store/todos";
import { InputArea } from "./InputArea";
import { TodoItem } from "./TodoItem";

export const Todolist = observer(() => {
  const context = useContext(TodoStoreContext);
  return (
    <div>
      <h1 className="headerTodoList">Todo List</h1>
      <InputArea></InputArea>
      <div className="wrapper-for-todoList">
        {context.todos.length
          ? context.todos.map((todo) => <TodoItem todo={todo} key={todo.id} />)
          : "You have no entries yet :("}
      </div>
    </div>
  );
});
