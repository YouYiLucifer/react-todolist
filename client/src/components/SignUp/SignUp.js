import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Form, Input, Checkbox, Button } from "antd";

import "./sign.less";
import axios from "../../../node_modules/axios";

const FormItem = Form.Item;

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      confirmDirty: false,
      autoCompleteResult: []
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        axios
          .post("/user/signup", {
            email: this.props.form.getFieldValue('email'),
            password: this.props.form.getFieldValue('password'),
            confirmPassword: this.props.form.getFieldValue('confirm'),
            username: this.props.form.getFieldValue('username')
          })
          .then(response => {
            console.log(response)
            this.props.history.push("/userinterface")
          })
          .catch(e => {
            alert(e)
          })
      }
      console.log(err)
    });
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({
      confirmDirty: this.state.confirmDirty || value
    });
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form
    if (value && value !== form.getFieldValue('password')) {
      callback('两次输入密码不一致!')
    }
    callback()
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="sign-form">
        <Form onSubmit={this.handleSubmit}>
          <FormItem label="email">
            {getFieldDecorator("email", {
              rules: [
                { required: true, message: "请输入邮箱!" }
              ]
            })(<Input />)}
          </FormItem>
          <FormItem label="Password">
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "请输入密码!" },
                { validator: this.validateToNextPassword },
                { min: 6 }
              ]
            })(<Input type="password" />)}
          </FormItem>
          <FormItem label="Confirm Password">
            {getFieldDecorator("confirm", {
              rules: [
                { required: true, message: "请确认密码!" },
                { validator: this.compareToFirstPassword }
              ]
            })(<Input type="password" onBlur={this.handleConfirmBlur} />)}
          </FormItem>
          <FormItem label="username">
            {getFieldDecorator('username', {
              rules: [
                {required: false}
              ]
            })(<Input />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator("agreement", {
              valuePropName: "checked"
            })(
              <Checkbox>
                I have read the <a href="">agreement</a>
              </Checkbox>
            )}
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="sign-form-button"
            >
              Register
            </Button>
            Or <Link to="/signin">Log in</Link>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default Form.create()(withRouter(SignUp));
