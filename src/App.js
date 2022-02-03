import React, { Component } from "react";
import "./App.css";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: "",
      todos: [],
      status: "all",
      filteredTodos: [],
    };

    this.setInputText = this.setInputText.bind(this);
    this.setTodos = this.setTodos.bind(this);
    this.setStatus = this.setStatus.bind(this);
    //this.filterHandler = this.filterHandler.bind(this);
    this.setFilteredTodos = this.setFilteredTodos.bind(this);
  }

  setInputText(text) {
    this.setState({ inputText: text });
  }

  setTodos(newTodosArr) {
    //Form će sa spread operatorom ubacivati na Onclick nove objekte u array
    //Isto tako i Todo componenta će koristiti ovu funkciju za btn click za označavanje svakog Todoa kao completed ili deleted
    this.setState({
      todos: newTodosArr,
    });
  }

  setStatus(newStatus) {
    this.setState({ status: newStatus });
  }

  setFilteredTodos(newFilteredTodosArr) {
    this.setState({ filteredTodos: newFilteredTodosArr });
  }

  filterHandler() {
    //ovu func možemo raspisati i u useEffect, ali ovako je odvojena zasebna metoda koju pozivamo u useEffectu
    if (this.state.status === "completed") {
      const completed = this.state.todos.filter(
        (todo) => todo.completed === true
      );
      this.setFilteredTodos(completed);
    } else if (this.state.status === "uncompleted") {
      const uncompleted = this.state.todos.filter(
        (todo) => todo.completed === false
      );
      this.setFilteredTodos(uncompleted);
    } else {
      const todos = this.state.todos;
      this.setFilteredTodos(todos);
    }
  }

  componentDidUpdate() {
    //baca mi error odi
    this.filterHandler();
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Todo List</h1>
        </header>
        <Form
          inputText={this.state.inputText}
          todos={this.state.todos}
          setInputText={this.setInputText} //minja samo u stateu string koji koristimo kao property u jednom todo text:inputText
          setTodos={this.setTodos} //minja samo u stateu array
          setStatus={this.setStatus} //isto minja samo u statetu status ovisno sto odaberemo u select elementu
          setFilteredTodos={this.setFilteredTodos}
          filteredTodos={this.state.filteredTodos}
        />
        <TodoList
          setTodos={this.setTodos}
          todos={this.state.todos}
          filteredTodos={this.state.filteredTodos}
          setFilteredTodos={this.setFilteredTodos}
          status={this.state.status}
        />
      </div>
    );
  }
}
