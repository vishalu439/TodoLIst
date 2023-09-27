import { useState } from "react";
import "./App.css";

function App() {
  const [todo, settodo] = useState("");
  const [todolist, settodolist] = useState([]);

  const addTodoHandler = () => {
    const item = {
      id: Date.now(),
      item: todo,
      done: false,
    };
    settodolist([...todolist, item]);
    settodo("");
  };

  const deleteHandler = (id) => {
    const newTodo = todolist.filter((item) => {
      return item.id !== id;
    });
    settodolist(newTodo);
  };

  const checkedHandler = (id) => {
    const newTodo = todolist.map((item) => {
      if (item.id === id) {
        return { ...item, done: !item.done };
      }
      return item;
    });
    settodolist(newTodo);
  };

  const todos = todolist.map((element) => {
    return (
      <div className="todo-item" key={element.id}>
        <p className={element.done ? "completed" : ""}>{element.item}</p>
        <input
          className="todo-checkbox"
          checked={element.done}
          type="checkbox"
          onChange={() => checkedHandler(element.id)}
        />
        <button className="delete-button" onClick={() => deleteHandler(element.id)}>
          Delete Todo
        </button>
      </div>
    );
  });

  return (
    <div className="todo-list">
      <h3>Todo List</h3>
      <div className="input-container">
        <input
          className="todo-input"
          type="text"
          value={todo}
          onChange={(e) => settodo(e.target.value)}
        />
        <button className="add-button" onClick={addTodoHandler}>
          Add Todo
        </button>
      </div>
      {todos}
    </div>
  );
}

export default App;
