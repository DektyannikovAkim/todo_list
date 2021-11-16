import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { TodoStoreContext } from "../../store/todos";
import { Loader } from "../Loader";
import * as styles from "./style";

export const InputArea = observer(() => {
  const context = useContext(TodoStoreContext);

  return (
    <styles.WrapperForForm>
      <styles.FormCreateTodo onSubmit={context.submitHandler}>
        <styles.InputForCreateTodo
          type="text"
          readOnly={context.loading}
          required
          value={context.newTodoValue}
          onChange={context.handleNewValueChange}
        />
        {!context.loading ? <styles.Submit type="submit">
          Add todo
        </styles.Submit> : <Loader/>}
        
      </styles.FormCreateTodo>
    </styles.WrapperForForm>
  );
});
