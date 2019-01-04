import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./Home"
import TodoShow from "./TodoShow"
import logo from "./logo.svg"
import "./App.css"

class App extends Component {
  state = {
    newTodoContent: "",
    todos: [
      { id: 1, content: "Call mom" },
      { id: 2, content: "Finish Project" },
      { id: 3, content: "Read React documentation" },
      { id: 3, content: "Learn Vue" }
    ]
  }

  onChange = e => {
    this.setState({
      newTodoContent: e.target.value
    })
  }

  createTodo = e => {
    e.preventDefault()
    console.log("creating a new todo")
    // add a new todo to the state of todos from the text in the input
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.createTodo}>
          Content:{" "}
          <input
            onChange={this.onChange}
            value={this.state.newTodoContent}
            type="text"
          />
          <button>Create Todo</button>
        </form>
        <Router>
          <div>
            <Route
              exact
              path="/"
              component={() => <Home todos={this.state.todos} />}
            />
            <Route
              path="/todos/:id"
              component={props => (
                <TodoShow {...props} todos={this.state.todos} />
              )}
            />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
