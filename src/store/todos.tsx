import { makeAutoObservable } from "mobx";
import React, { createContext, FC } from "react";
import { getCurrentDateAPI } from "../api";
import { TodoModel } from "../moduls/todo";

const storageKey = "todoList";

export class Todo {
  todos: TodoModel[] = [];
  loading: boolean = false;
  newTodoValue: string = "";

  constructor() {
    const storedItems = localStorage.getItem(storageKey);
    if (storedItems) {
      this.todos = JSON.parse(storedItems);
      for (const el of this.todos) {
        el.dateOfCreation = new Date(el.dateOfCreation);
      }
    }
    makeAutoObservable(this);
    window.addEventListener("beforeunload", () => {
      localStorage.setItem(storageKey, JSON.stringify(this.todos));
    });
  }

  changeTodoTitle(title: string, todo: TodoModel) {
    todo.title = title;
  }

  handleNewValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.newTodoValue = e.target.value;
  };

  handleBlur(todo: TodoModel) {
    let findTodo = this.todos.find(
      (el) => el.title === todo.title && el.id !== todo.id
    );
    if (findTodo) {
      this.removeTodo(findTodo.id);
    }
  }

  checkForUniqueness(title: string) {
    return !!this.todos.find((el) => el.title === title);
  }

  submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (this.newTodoValue.trim()) {
      this.createTodo();
    }
  };

  handleTodoCreation(date: Date) {
    this.todos.push({
      title: this.newTodoValue,
      id: Date.now(),
      completed: false,
      dateOfCreation: date,
    });
    this.newTodoValue = "";
  }

  createTodo() {
    if (!this.checkForUniqueness(this.newTodoValue)) {
      this.setLoading();
      getCurrentDateAPI().then((date) => {
        if (date) {
          this.handleTodoCreation(date);
        }
      }).finally(()=> this.setLoading());
    }
  }

  setLoading() {
    this.loading = !this.loading;
  }

  completeTodo(todo: TodoModel) {
    todo.completed = !todo.completed;
  }

  removeTodo(id: TodoModel["id"]) {
    this.todos = this.todos.filter((el) => el.id !== id);
  }
}

export const TodoStoreContext = createContext({} as Todo);

export const TodoStoreProvider: FC = (props) => {
  const store = new Todo();
  return (
    <TodoStoreContext.Provider value={store}>
      {props.children}
    </TodoStoreContext.Provider>
  );
};
