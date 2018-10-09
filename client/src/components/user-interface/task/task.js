import React from 'react'
import { List } from 'antd'

import TitleInput from './dumb-components/title-input'
import './task.less'

// const data = [
//   'Racing car sprays burning fuel into crowd.',
//   'Japanese princess to wed commoner.',
//   'Australian walks 100km after outback crash.',
//   'Man charged over missing wedding girl.',
//   'Los Angeles battles huge wildfires.',
// ];

export default class Task extends React.Component {
  render () {
    return (
      <div className="list-wrapper">
        <h1 style={{fontWeight: "200"}}>Tab</h1>
        <TitleInput/>
        <List/>
        <p>222</p>
      </div>
    )
  }
}