'use strict';

import React from 'react'
import * as Colors from 'material-ui/styles/colors';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

class Footer extends React.Component {
  static defaultProps = {
    backgroundColor: '#FFF'
  }

  constructor(props) {
    super(props)
  }

  render() {
    const footerStyle = {
      backgroundColor: this.props.backgroundColor,
      position: 'absolute',
      bottom: 0,
      width: '100%'
    }

    return (
      <Toolbar
        style={footerStyle}
      >
        <ToolbarGroup>
          <ToolbarTitle text={this.props.title} />
        </ToolbarGroup>
      </Toolbar>
    )
  }
}

export default Footer
