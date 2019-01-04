import React from "react"

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Eric's Todo List</h1>
        {this.props.todos.map(todo => {
          return <p>{todo.content}</p>
        })}
      </div>
    )
  }
}

export default Home
