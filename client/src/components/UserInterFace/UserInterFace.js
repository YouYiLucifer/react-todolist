import React from 'react'

import Tab from './Tab/Tab'
import List from './List/List'
import Content from './Content/Content'

export default class UserInterFace extends React.Component {
  render () {
    return (
      <div>
        <Tab/>
        <List/>
        <Content/>
      </div>
    )
  }
}