import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducer from './reducer/reducer'
import SideBar from './side-bar/side-bar'
import Task from './task/task'
import Content from './content/content'

const store = createStore(reducer)

export default class UserInterFace extends React.Component {
  render () {
    return (
      <Provider store={ store }>
        <div style={{display: "flex"}}>
          <SideBar/>
          <Task/>
          <Content/>
        </div>
      </Provider>
    )
  }
}