'use strict';

import React from 'react'
import * as Colors from 'material-ui/styles/colors';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

class Header extends React.Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired
  }

  static defaultProps = {
    backgroundColor: '#FFF'
  }

  constructor(props) {
    super(props)
  }

  render() {
    const headerStyle = {
      height: '80px',
      lineHeight: '80px',
      backgroundColor: this.props.backgroundColor,
      borderBottom: '1px solid #e7eaec'
    }

    const titleStyle = {
      height: '80px',
      lineHeight: '80px',
      fontSize: '24px',
      fontWeight: 300
    }

    return (
      <Toolbar
        style={headerStyle}
      >
        <ToolbarGroup>
          <ToolbarTitle 
            text={this.props.title} 
            style={titleStyle}
          />
        </ToolbarGroup>
      </Toolbar>
    )
  }
}

export default Header
