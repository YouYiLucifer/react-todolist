import React from 'react'
import { connect } from 'react-redux'
import { contentEdit } from '../reducer/actions'

import './content.less'

class Content extends React.Component {
  handleTextareaChange = (e, id) => {
    this.props.contentEdit(e.target.value, id)
  }

  handleTextareaOnBlur = () => {

  }

  render () {
    const { currentStatus, currentTodoId } = this.props
    const todos = this.props.todos.filter(todo => todo.status === currentStatus)
    const todo = todos[currentTodoId]

    return (
      <div className="content-wrapper">
        {todo
          ? 
          <div>
            <h3>{todo.title}</h3>
            <textarea
              className="content-detail"
              value={todo ? todo.content : ''}
              placeholder='写点什么吧...'
              onChange={(e) => this.handleTextareaChange(e, todo.id)}
              onBlur={this.handleTextareaOnBlur}>]
            </textarea>
          </div>
          : 
          <h2>No data</h2>
        }
      </div>
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
    contentEdit (e, id) {
      dispatch(contentEdit(e, id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)