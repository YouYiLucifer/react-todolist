import React from 'react'
import { connect } from 'react-redux'

import TitleInput from '../dumb-components/todo-input'
import { addTodo } from '../../reducer/index'

class TitleInputContainer extends React.Component {
  handleEnter = todo => {
    this.props.addTodo(todo)
  }

  render() {
    return (
      <TitleInput onKeyUp={this.handleEnter} />
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

const mapDispatch = dispatch => {
  return {
    addTodo (todo) {
      dispatch(addTodo(todo))
    }
  }
}

export default connect(mapStateToProps, mapDispatch)(TitleInputContainer)