import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { TodoModel } from "../../../moduls/todo";
import { TodoStoreContext } from "../../../store/todos";
import * as styles from "./style";

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
    <styles.WrapperForTodo>
      <styles.CheckboxWrapper>
        <styles.Checkbox
          type="checkbox"
          id={props.todo.id.toString()}
          checked={props.todo.completed}
          onChange={() => {
            context.completeTodo(props.todo);
          }}
        />
        <styles.Label htmlFor={props.todo.id.toString()} />
      </styles.CheckboxWrapper>

      <styles.Content
        html={props.todo.title}
        aria-checked={props.todo.completed}
        onChange={(e) => context.changeTodoTitle(e.target.value, props.todo)}
        onBlur={() => context.handleBlur(props.todo)}
      />

      <styles.Date>{formatedDate}</styles.Date>
      <styles.Close onClick={() => context.removeTodo(props.todo.id)}>
        &#215;
      </styles.Close>
    </styles.WrapperForTodo>
  );
});
