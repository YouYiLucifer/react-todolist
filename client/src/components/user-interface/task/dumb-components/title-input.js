import React from 'react'
import { Input } from 'antd'

export default class TitleInput extends React.Component {
  handleInputChange = e => {
    this.props.onChange(e.target.value)
  }

  render () {
    return (
      <div>
        <Input placeholder="按回车键添加任务" onChange={this.handleInputChange}/>
      </div>
    )
  }
}