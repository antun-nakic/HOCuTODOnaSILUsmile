import React, { useContext } from "react";
import { mojKontekst } from "../App";

const Todo = ({ text, todo }) => {
  const kontekst = useContext(mojKontekst);

  const deleteHandler = (todos, setTodos) => {
    const filterDeletedTodo = todos.filter((el) => el.id !== todo.id);
    console.log(filterDeletedTodo); //array umanjena za filtrirani todo
    kontekst.setTodos(filterDeletedTodo);
  };
  const completeHandler = (todos, setTodos) => {
    const filterCompletedTodo = todos.map((item) => {
      if (item.id === todo.id) {
        return { ...item, completed: !item.completed }; //na button klik da je completed todo prominit ce samo property completed iz false u true tj obrnut (!item.completed)
      }
      return item;
    });
    console.log(filterCompletedTodo); //array sa svim todosima samo ce biti prominjem property is completed: false
    kontekst.setTodos(filterCompletedTodo);
  };

  return (
    <div className='todo'>
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button
        onClick={() =>
          completeHandler(kontekst.todos, () => kontekst.setTodos())
        }
        className='complete-btn'>
        <i className='fas fa-check'></i>
      </button>
      <button
        onClick={() => deleteHandler(kontekst.todos, () => kontekst.setTodos())}
        className='trash-btn'>
        <i className='fas fa-trash'></i>
      </button>
    </div>
  );
};

export default Todo;
