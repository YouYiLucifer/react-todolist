import React from 'react'
import { Input } from 'antd'

export default class TitleInput extends React.Component {
  constructor () {
    super()
    this.state = {
      title: ''
    }
  }
  handleInputChange = e => {
    this.setState({
      title: e.target.value
    })
  }

  handleEnter = e => {
    if (e.keyCode === 13 && e.target.value.trim() !== '') {
      const createTime = new Date().toLocaleString()
      console.log(createTime)
      this.props.onKeyUp({
        title: e.target.value, 
        content: '', 
        tag: '未完成',
        createTime
      })
      this.setState({
        title: ''
      })
    }
  }

  componentDidMount () {
    this.input.focus()
  }

  render () {
    return (
      <div>
        <Input
          placeholder="按回车键添加任务"
          onChange={this.handleInputChange}
          onKeyUp={this.handleEnter}
          ref={input => this.input = input}
          value={this.state.title}
        />
      </div>
    )
  }
}