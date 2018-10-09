import React from 'react'
import { Menu, Icon } from 'antd'

import './tab.less'

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_861606_2iytsrxlsdp.js', // 在 iconfont.cn 上生成
});

class Tab extends React.Component {
  constructor () {
    super()
    this.state = {
      current: 'all'
    }
  }

  onOpenChange = () => {

  }

  handleClick = e => {
    this.setState({
      current: e.key
    })
  }

  render () {
    return (
      <div>
        <Menu
          theme="dark"
          className="menu"
          // defaultSelectedKeys={['all']}
          selectedKeys={[this.state.current]}
          mode="inline"
          onClick={this.handleClick}
        >
          <Menu.Item className="menu-item" key="all">
            <IconFont type="iconfont-order" style={{fontSize: "18px"}} />
            <span>所有</span>
            <span className="list-count">0</span>
          </Menu.Item>
          <Menu.Item className="menu-item" key="completed">
            <IconFont type="iconfont-completed" style={{fontSize: "18px"}} />
            <span>已完成</span>
            <span className="list-count">0</span>
          </Menu.Item>
          <Menu.Item className="menu-item" key="deleted">
            <IconFont type="iconfont-deleted" style={{fontSize: "20px"}} />
            <span>已删除</span>
            <span className="list-count">0</span>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default Tab