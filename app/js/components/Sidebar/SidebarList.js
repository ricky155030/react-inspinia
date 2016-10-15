'use strict';

import React from 'react'
import * as Colors from 'material-ui/styles/colors';
import { List } from 'material-ui/List';

export class SidebarList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: '-1'
    }
  }

  componentDidUpdate() {
    console.log('update')
  }

  generateChildren(children) {
    this.keyIndex += 1

    if(typeof(children) == 'object') {
      return children.map((child) => {
        return React.cloneElement(child, {
          key: this.keyIndex,
          value: this.keyIndex,
          onActive: (value) => {console.log(this.state); this.setState({active: value})},
          active: this.state.active,
          nestedItems: this.generateChildren(child.props.nestedItems)
        })
      })
    } else {
      return children
    }
  }

  render() {
    this.keyIndex = 0

    return (
      <List style={{paddingTop: '0'}}>
        {this.generateChildren(this.props.children)}
      </List>
    )
  }
}
