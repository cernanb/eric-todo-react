import React, { Component } from "react"

class TodoShow extends Component {
  render() {
    const todo = this.props.todos.find(todo => {
      return todo.id === +this.props.match.params.id
    })
    return (
      <div>
        <h1>Individual Todo</h1>
        Content: {todo.content}
      </div>
    )
  }
}

export default TodoShow
