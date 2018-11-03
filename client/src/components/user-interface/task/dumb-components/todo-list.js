import React from 'react'
import { Icon, Popconfirm, message } from 'antd';

import './todo-list.less'

export default class TodoList extends React.Component {
  handleCheckedChange = id => {
    this.props.onCheckedChange(id)
  }

  handleTodoDelete = todo => {
    if (todo.tag !== '已删除') {
      this.props.onTodoDelete(todo.id)
    } else {
      message.success('已删除')
      this.props.onTodoRemove(todo.id)
    }
  }

  render () {
    const todo = this.props.todo
    const isChecked = todo.tag === '已完成' ? 'isChecked' : ''

    return (
      <div className={`${isChecked} wrapper`}>
        {todo.tag !== '已删除'
        ?
        <Icon
          className="checkbox"
          theme="outlined"
          onClick={() => this.handleCheckedChange(todo.id)} 
          type={todo.tag === '未完成' ? 'border' : 'check-square'}
        />
        :
        ''
        }
        <div className="title-wrapper">
          <p className="title">{todo.title}</p>
          <span className="create-time">{todo.createTime}</span>
        </div>
        <Popconfirm
          title="确定删除？"
          onConfirm={() => this.handleTodoDelete(todo)}
          okText="确定"
          cancelText="取消"
          icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
        >
          <Icon
            className="deleted"
            type="delete"
          />
        </Popconfirm>
      </div>
      )
    }
  }