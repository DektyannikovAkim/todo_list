import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { TodoStoreContext } from "../../store/todos";
import { Loader } from "../Loader";
import * as styles from "./style";

export const InputArea = observer(() => {
  const context = useContext(TodoStoreContext);

  return (
    <styles.wrapperForForm>
      <styles.formCreateTodo onSubmit={context.submitHandler}>
        <styles.inputForCreateTodo
          type="text"
          readOnly={context.loading}
          required
          value={context.newTodoValue}
          onChange={context.handleNewValueChange}
        />
        {!context.loading ? <styles.submit type="submit">
          Add todo
        </styles.submit> : <Loader/>}
        
      </styles.formCreateTodo>
    </styles.wrapperForForm>
  );
});
