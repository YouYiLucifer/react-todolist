import React from 'react'
import { Menu, Icon } from 'antd'
import { connect } from 'react-redux'

import './tab.less'
import { toggleStatus } from '../../reducer/actions'

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_861606_2iytsrxlsdp.js', // 在 iconfont.cn 上生成
});

class Tab extends React.Component {
  handleClick = e => {
    this.props.toggleStatus(e.key)
    console.log(e.key)
  }

  render () {
    const { todos, currentStatus } = this.props
    const lengthOfUnfinished = todos ? todos.filter(item => item.status === '未完成').length : 0
    const lengthOfFinished = todos ? todos.filter(item => item.status === '已完成').length : 0
    const lengthOfDeleted = todos ? todos.filter(item => item.status === '已删除').length : 0

    return (
      <div>
        <Menu
          theme="dark"
          className="menu"
          selectedKeys={[currentStatus]}
          mode="inline"
          onClick={this.handleClick}
        >
          <Menu.Item className="menu-item" key="未完成">
            <IconFont type="iconfont-order" style={{fontSize: "18px"}} />
            <span>未完成</span>
            <span className="list-count">{lengthOfUnfinished}</span>
          </Menu.Item>
          <Menu.Item className="menu-item" key="已完成">
            <IconFont type="iconfont-completed" style={{fontSize: "18px"}} />
            <span>已完成</span>
            <span className="list-count">{lengthOfFinished}</span>
          </Menu.Item>
          <Menu.Item className="menu-item" key="已删除">
            <IconFont type="iconfont-deleted" style={{fontSize: "20px"}} />
            <span>已删除</span>
            <span className="list-count">{lengthOfDeleted}</span>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleStatus (currentStatus) {
      dispatch(toggleStatus(currentStatus))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tab)