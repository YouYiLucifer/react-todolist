import React from 'react'
import { connect } from 'react-redux'

import './content.less'

class Content extends React.Component {
  constructor () {
    super()
    this.state = {
      textareaValue: '写点什么吧...'
    }
  }

  handleTextareaChange = e => {
    this.setState({
      textareaValue: e.target.value
    })
  }

  handleTextareaOnFocus = () => {
    if (this.state.textareaValue === '写点什么吧...') {
      this.setState({
        textareaValue: ''
      })
    }
  }

  handleTextareaOnBlur = () => {
    if (this.state.textareaValue.trim() === '') {
      this.setState({
        textareaValue: '写点什么吧...'
      })
    }
  }

  aaa = ()=> {
    console.log(this.props.currentTodoId)
  }

  render () {
    const { currentTag, currentTodoId } = this.props
    const todos = this.props.todos.filter(item => item.tag === currentTag)

    return (
      <div className="content-wrapper">
        <h3 onClick={this.aaa}>{todos[0].title}</h3>
        <textarea
          className="content-detail"
          value={this.state.textareaValue}
          onChange={this.handleTextareaChange}
          onFocus={this.handleTextareaOnFocus}
          onBlur={this.handleTextareaOnBlur}>
        </textarea>
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

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)