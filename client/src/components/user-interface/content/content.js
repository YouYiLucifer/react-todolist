import React from 'react'

import './content.less'

export default class Content extends React.Component {
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

  render () {
    return (
      <div className="content-wrapper">
        <h2 className="title">Title</h2>
        <textarea
          className="content-detail"
          value={this.state.textareaValue}
          onChange={this.handleTextareaChange}
          onFocus={this.handleTextareaOnFocus}
          onBlur={this.handleTextareaOnBlur}>
          fff
        </textarea>
      </div>
    )
  }
}