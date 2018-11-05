import React from 'react'
import { Icon, Popconfirm, Tag, message } from 'antd';

import './todo-list.less'
import tags from './todo-tags'

export default class TodoList extends React.Component {
  handleCheckedChange = id => {
    this.props.onCheckedChange(id)
  }

  handleTodoDelete = todo => {
    this.props.onTodoDelete(todo.id)
  }

  handleTodoRemove = todo => {
    message.success('已删除')
    this.props.onTodoRemove(todo.id)
  }

  render () {
    const todo = this.props.todo
    const isChecked = todo.status === '已完成' ? 'isChecked' : ''

    return (
      <div className={`${isChecked} wrapper`}>
        {todo.status !== '已删除'
        ?
        <Icon
          className="checkbox"
          theme="outlined"
          onClick={() => this.handleCheckedChange(todo.id)} 
          type={todo.status === '未完成' ? 'border' : 'check-square'}
        />
        :
        ''
        }
        <div className="title-wrapper">
          <div className="title">
            {todo.title}
            {todo.tag
            ?
            <Tag
              className="todo-tag"
              color={tags[todo.tag]} >
              {todo.tag}
            </Tag>
            :
            ''
            }
          </div>
          <span className="create-time">{todo.createTime}</span>
        </div>
        {todo.status !== "已删除"
        ?
        <Icon
          className="deleted"
          type="delete"
          onClick={() => this.handleTodoDelete(todo)}
        />
        :
        <Popconfirm
          title="确定删除？"
          onConfirm={() => this.handleTodoRemove(todo)}
          okText="确定"
          cancelText="取消"
          icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
        >
          <Icon
            className="deleted"
            type="delete"
          />
        </Popconfirm>
        }
      </div>
      )
    }
  }