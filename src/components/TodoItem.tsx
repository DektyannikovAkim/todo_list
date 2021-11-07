import { observer } from "mobx-react-lite";
import { useContext } from "react";
import ContentEditable from "react-contenteditable";
import { TodoModel } from "../moduls/todo";
import { TodoStoreContext } from "../store/todos";

interface Props {
  todo: TodoModel;
}

export const TodoItem = observer((props: Props) => {
  const context = useContext(TodoStoreContext);
  const formatedDate = props.todo.dateOfCreation.toLocaleDateString(undefined, {
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
  });
  return (
    <div className="wrapper-for-todo">
      <div className="element-wrapper">
        <input
          type="checkbox"
          className="checkbox"
          id={props.todo.id.toString()}
          checked={props.todo.completed}
          onChange={() => {
            context.completeTodo(props.todo);
          }}
        />
        <label htmlFor={props.todo.id.toString()}></label>
      </div>

      <ContentEditable
        html={props.todo.title}
        className={
          props.todo.completed ? "title-todoItem complete" : "title-todoItem"
        }
        onChange={(e) => context.changeTodoTitle(e.target.value, props.todo)}
        onBlur={()=> context.handleBlur(props.todo)}
      />

      <span className="date-info">{formatedDate}</span>
      <button
        className="close-btn"
        onClick={() => context.removeTodo(props.todo.id)}
      >
        &#215;
      </button>
    </div>
  );
});
