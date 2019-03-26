import React from 'react'
import { Input, Select } from 'antd'

const Option = Select.Option

export default class TitleInput extends React.Component {
  constructor () {
    super()
    this.state = {
      title: '',
      tag: '生活'
    }
  }

  componentDidMount () {
    this.input.focus()
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
        status: '未完成',
        tag: this.state.tag,
        createTime
      })
      this.setState({
        title: ''
      })
    }
  }

  handleSelectTag = value => {
    this.setState({
      tag: value
    })
    // console.log(value)
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
        <Select
          style={{ width: 66, marginTop: 10}}
          size="small"
          // placeholder="标签"
          defaultValue="生活"
          onChange={this.handleSelectTag}>
          <Option value="生活">生活</Option>
          <Option value="工作">工作</Option>
          <Option value="娱乐">娱乐</Option>
        </Select>
      </div>
    )
  }
}