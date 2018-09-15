import React from 'react'

import '../SignUp/sign.css'

export default class SignIn extends React.Component {
  render () {
    return (
      <div className="signup_wrapper">
        <div className="input_wrapper">
          <div className="input_item">
            <span className="icon">邮箱</span>
            <input className="user_input" type="text" placeholder="邮箱"/>
          </div>
          <div className="input_item">
            <span className="icon">密码</span>
            <input className="user_input" type="text" placeholder="密码"/>
          </div>
        </div>
        <button className="create_account">登录</button>
      </div>
    )
  }
}