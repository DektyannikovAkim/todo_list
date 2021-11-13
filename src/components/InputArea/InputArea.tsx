import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { TodoStoreContext } from "../../store/todos";
import * as styles from "./style";

export const InputArea = observer(() => {
  const context = useContext(TodoStoreContext);

  return (
    <styles.wrapperForForm>
      <styles.formCreateTodo onSubmit={context.submitHandler}>
        <styles.inputForCreateTodo
          type="text"
          required
          value={context.newTodoValue}
          onChange={context.handleNewValueChange}
        />
        <styles.submit type="submit">
          Add todo
        </styles.submit>
      </styles.formCreateTodo>
    </styles.wrapperForForm>
  );
});
