'use strict';

import React from 'react'
import * as Colors from 'material-ui/styles/colors';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Header from './Page/Header'
import Footer from './Page/Footer'

class Page extends React.Component {
  static propTypes = {
    headerTitle: React.PropTypes.string.isRequired
  }

  static defaultProps = {
    backgroundColor: '#FFF'
  }

  constructor(props) {
    super(props)
  }

  render() {
    const containerStyle = {
      padding: '24px'
    }

    return (
      <div>
        <Header
          title={this.props.headerTitle}
        />
        <div style={containerStyle}>
          {this.props.children}
        </div>
        <Footer 
          title={this.props.footerTitle}
        />
      </div>
    )
  }
}

export default Page
