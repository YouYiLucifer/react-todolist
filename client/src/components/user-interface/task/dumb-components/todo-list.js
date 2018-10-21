import React from 'react'

export default class TodoList extends React.Component {
  handleIndexChange = index => {
    this.props.onIndexChange(index)
  }
  render () {
    return (
      <div
        onClick={() => this.handleIndexChange(this.props.index)}
      >
      {this.props.todo.title}
      </div>
    )
  }
}