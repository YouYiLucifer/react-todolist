import React from 'react'
import { connect } from 'react-redux'

import TitleInput from './containers/todo-input'
import TodoList from './containers/todo-list'
import './task.less'

class Task extends React.Component {
  render () {
    const { currentTag } = this.props
    return (
      <div className="list-wrapper">
        <div className="head">
          <h1 style={{fontWeight: "200"}}>{currentTag}</h1>
          <TitleInput />
        </div>
        <TodoList/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(Task)