import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { TodoStoreContext } from "../store/todos";

export const InputArea = observer(() => {
  const context = useContext(TodoStoreContext);

  return (
    <div className="wrapper-for-formCreateTodo">
      <form
        className="formCreateTodo"
        onSubmit={context.submitHandler}
      >
        <input
          type="text"
          required
          className="input-for-createTodo"
          value={context.newTodoValue}
          onChange={context.handleNewValueChange}
        />
        <button className="btn-addTodo" type="submit">
          Add todo
        </button>
      </form>
    </div>
  );
});
