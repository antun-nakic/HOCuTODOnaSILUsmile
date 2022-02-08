import React from "react";
import Todo from "./Todo";

const TodoList = ({
  todos,
  setTodos,
  filteredTodos,
  status,
  setFilteredTodos,
}) => {
  // const filterHandler = () => {
  //   //ovu func možemo raspisati i u useEffect, ali ovako je odvojena zasebna metoda koju pozivamo u useEffectu
  //   if (status === "completed") {
  //     const completed = todos.filter((todo) => todo.completed === true);
  //     setFilteredTodos(completed);
  //   } else if (status === "uncompleted") {
  //     const uncompleted = todos.filter((todo) => todo.completed === false);
  //     setFilteredTodos(uncompleted);
  //   } else {
  //     setFilteredTodos(todos);
  //   }
  // };

  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        {filteredTodos?.map(
          (
            todo //mapira kroz filteredTodos umisto samo Todos pa ce ovisno i switchu prkazati filtriranu todos array
          ) => (
            <Todo todo={todo} text={todo.text} key={todo.id} />
          )
        )}
      </ul>
    </div>
  );
};

export default TodoList;
