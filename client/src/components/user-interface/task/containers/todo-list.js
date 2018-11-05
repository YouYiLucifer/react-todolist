import React from 'react'
import { List } from 'antd'
import { connect } from 'react-redux'
import { deleteTodo, removeTodo, changeTodoId, toggleTodoStatus } from '../../reducer/actions'

import TodoList from '../dumb-components/todo-list'
import './todo-list.less'

class TodoListContainer extends React.Component {
  handleIndexChange = (todo, index) => {
    this.props.changeTodoId(index)
    console.log(todo)
  }

  handleCheckedChange = id => {
    this.props.toggleTodoStatus(id)
  }

  handleTodoDelete = id => {
    this.props.deleteTodo(id)
  }

  handleTodoRemove = id => {
    this.props.removeTodo(id)
  }

  render () {
    const todos = this.props.todos.filter(item => item.status === this.props.currentStatus)

    return (
      <List
        dataSource={todos}
        renderItem={(todo, index) => 
          <List.Item
            className="list-item"
            key={todo.id}
            style={{cursor: 'pointer'}}
            onClick={() => this.handleIndexChange(todo, index)}>
              <TodoList
                key={todo.id}
                todo={todo}
                onCheckedChange={this.handleCheckedChange}
                onTodoDelete={this.handleTodoDelete}
                onTodoRemove={this.handleTodoRemove}
              />
          </List.Item>
        }>
      </List>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo (id) {
      dispatch(deleteTodo(id))
    },
    removeTodo (id) {
      dispatch(removeTodo(id))
    },
    changeTodoId (index) {
      dispatch(changeTodoId(index))
    },
    toggleTodoStatus (id) {
      dispatch(toggleTodoStatus(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer)