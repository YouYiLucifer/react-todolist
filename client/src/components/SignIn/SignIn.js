import React from "react";
import { Form, Icon, Button, Input, Checkbox } from "antd"
import { Link } from "react-router-dom"
import axios from "axios";

import "../SignUp/sign.less";

const FormItem = Form.Item

class SignIn extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err) => {
      if (!err) {
        axios
          .post("/user/signin", {
            email: this.props.form.getFieldValue('email'),
            password: this.props.form.getFieldValue('password')
          })
          .then(response => {
            console.log(response)
            this.props.history.push('/userinterface')
          })
          .catch(e => {
            alert(e);
          });
      }
    })
  };

  render() {
    const { getFieldDecorator } = this.props.form

    return (
      <div className="sign-form">
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator('email', {
              rules: [{required: true, message: '请输入用户名!'}]
            })(
              <Input prefix={<Icon type="mail" style={{ color: '#c7c7c7' }} />} placeholder="E-mail" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{required: true, message: '请输入密码!'}]
            })(
              <Input prefix={<Icon type="lock" style={{ color: '#c7c7c7'}} />} type="password" placeholder="Password"/>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remerber', {
              valuePropName: 'checked',
              initialValue: true
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a className="signin-form-forgot" href="">Forgot password</a>
            <Button type="primary" htmlType="submit" className="sign-form-button">
              Log in
            </Button>
            Or <Link to="/signup">Register now!</Link>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default Form.create()(SignIn)