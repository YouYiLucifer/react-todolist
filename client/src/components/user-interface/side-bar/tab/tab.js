import React from 'react'
import { Menu, Icon } from 'antd'
import { connect } from 'react-redux'

import './tab.less'
import { toggleTag } from '../../reducer/index'

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_861606_2iytsrxlsdp.js', // 在 iconfont.cn 上生成
});

class Tab extends React.Component {
  handleClick = e => {
    this.props.toggleTag(e.key)
    console.log(e.key)
  }

  render () {
    const { todos, currentTag } = this.props
    const lengthOfAll = todos.filter(item => item.tag === '所有').length
    const lengthOfFinished = todos.filter(item => item.tag === '已完成').length
    const lengthOfDeleted = todos.filter(item => item.tag === '已删除').length

    return (
      <div>
        <Menu
          theme="dark"
          className="menu"
          selectedKeys={[currentTag]}
          mode="inline"
          onClick={this.handleClick}
        >
          <Menu.Item className="menu-item" key="所有">
            <IconFont type="iconfont-order" style={{fontSize: "18px"}} />
            <span>所有</span>
            <span className="list-count">{lengthOfAll}</span>
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
    toggleTag (currentTag) {
      dispatch(toggleTag(currentTag))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tab)