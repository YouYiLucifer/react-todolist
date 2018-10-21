import React from 'react'
import { List } from 'antd'
import { connect } from 'react-redux'
import { deleteTodo, changeTodoId } from '../../reducer/index'

import TodoList from '../dumb-components/todo-list'

class TodoListContainer extends React.Component {
  handleIndexChange = (todos, index) => {
    this.props.changeTodoId(index)
    console.log(this.props)
  }

  render () {
    const todos = this.props.todos.filter(item => item.tag === this.props.currentTag)

    return (
      <List
        dataSource={todos}
        renderItem={(item, index) => 
          <List.Item key={index}>
            <TodoList
              key={index}
              index={index}
              todo={item}
              onIndexChange={ () => this.handleIndexChange(todos, index)}/>
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
    deleteTodo (index) {
      dispatch(deleteTodo(index))
    },
    changeTodoId (index) {
      dispatch(changeTodoId(index))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer)