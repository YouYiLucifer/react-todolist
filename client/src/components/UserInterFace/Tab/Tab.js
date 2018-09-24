import React from 'react'
import { withRouter } from 'react-router-dom';
import axios from 'axios'

import './tab.css'

class Tab extends React.Component {
  toSignOut = () => {
    axios
      .post('/user/signout')
      .then(res => {
        console.log(res)
      })
    this.props.history.push('/signin')
  }

  render () {
    return (
        <div className="tab">
          <div className="user">
            <a href="" className="avatar-wrapper">
              <img src="" className="avatar" alt='avatar'/>
            </a>
            <p className="name">Lucifer</p>
          </div>
          <div className='menu_wrapper'>
            <ul>
              <li>
                <span className="icon_files"></span>
                <span className="text">All</span>
                <span className="count">0</span>
              </li>
              <li>
                <span className="icon_files"></span>
                <span className="text">Deleted</span>
                <span className="count">0</span>
              </li>
            </ul>
          </div>
          <button onClick={this.toSignOut}>登出</button>
        </div>
    )
  }
}

export default withRouter(Tab);