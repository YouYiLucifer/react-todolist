import React from 'react'
import { withRouter } from 'react-router-dom';
import axios from 'axios'

import './side-bar.less'
import Tab from './tab/tab'

class SideBar extends React.Component {
  toSignOut = e => {
    e.preventDefault()
    axios
      .post('/user/signout')
      .then(res => {
        console.log(res)
        this.props.history.push('/signin')
      })
  }

  _handleClick = e => {
    e.preventDefault()
  }

  render () {
    return (
        <div className="side-bar-wrapper">
          <div className="user">
            <a href="" className="avatar-wrapper" onClick={this._handleClick}>
              <img className="avatar" src={require('./avatar.jpg')} alt='avatar'/>
            </a>
            <span className="user-name">Lucifer</span>
            <a className="sign-out" onClick={this.toSignOut}>登出</a>
          </div>
          <div className='tab-wrapper'>
            <Tab/>
          </div>
        </div>
    )
  }
}

export default withRouter(SideBar);