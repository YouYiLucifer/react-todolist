import React from 'react'
import { connect } from 'react-redux'

import TitleInput from '../dumb-components/title-input'

class TitleInputContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      titleInputValue: ''
    }
  }

  handleInputChange = () => {
    
  }

  render() {
    return (
      <TitleInput onChange={this.handleInputChange}/>
    )
  }
}