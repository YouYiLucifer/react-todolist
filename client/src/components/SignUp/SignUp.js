import React from 'react'
import Button from 'antd/lib/button'

import './sign.css'

export default class SignUp extends React.Component {
  render () {
    return (
      <div className="signup_wrapper">
        <div className="input_wrapper">
          <div className="input_item">
            <span className="icon">昵称</span>
            <input className="user_input" type="text" placeholder="昵称（可选）"/>
          </div>
          <div className="input_item">
            <span className="icon">邮箱</span>
            <input className="user_input" type="text" placeholder="邮箱"/>
          </div>
          <div className="input_item">
            <span className="icon">密码</span>
            <input className="user_input" type="text" placeholder="密码"/>
          </div>
        </div>
        <button className="create_account">创建免费账户</button>
        <Button type="primary">hahahah</Button>
        <div className="signin">已有账号登录</div>
      </div>
    )
  }
}