import React from 'react';
import uniqueString from 'unique-string';
import { AddTodoForm, TodoList } from './Components';
import './App.css';

class App extends React.Component 
{
  constructor(props) // nepotrebno, može se pisati samo state =
  {
    super(props);
    this.state = {
      todos: JSON.parse(localStorage.getItem('todos')) || []
    }
  }

  // TODO: Add to localStorage

  componentDidUpdate()
  {
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }

  handleAddTodo = (value) => {
    const { todos } = this.state;
    const newTodo = {
      id: uniqueString(),
      task: value,
      completed: false
    }

    this.setState({
      todos: [...todos, newTodo]
    })
  } 

  handleToggleTodo = (id) => {
    const { todos } = this.state;
    const todo = todos.find(item => item.id === id);

    todo.completed = !todo.completed;

    this.setState({ todos });
  }

  handleRemoveTodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter(todo => todo.id !== id);

    this.setState({ todos: newTodos });
  }

  render()
  {
    const { todos } = this.state;

    return (
      <div className="app">
        <h1 className="header">My Tasks</h1>
        <div className="todo-container">
          <AddTodoForm addTodo={this.handleAddTodo} />
          <TodoList 
            todos={todos}
            toggleTodo={this.handleToggleTodo}
            removeTodo={this.handleRemoveTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
