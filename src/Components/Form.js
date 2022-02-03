import React from "react";

const Form = ({
  setInputText,
  setTodos,
  todos,
  inputText,
  setStatus,
  setFilteredTodos,
  filteredTodos,
}) => {
  const inputTextHandler = (e) => {
    //console.log(e.target.value);
    setInputText(e.target.value);
    inputText = e.target.value;
  };

  const submitTodoHandler = (event) => {
    event.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 10000 },
    ]);
    console.log(todos);
    setFilteredTodos(todos); //tu je todos prazna array [] zašto hvata stanje naon mountanja a ne nakon updatea?
    setInputText(""); //reset u stateu
  };

  const statusHandler = (event) => {
    setStatus(event.target.value);
  };

  return (
    <form>
      <input
        value={inputText} //reset u inputu
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
