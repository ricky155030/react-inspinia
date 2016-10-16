'use strict';

import React from 'react'
import { isArray } from 'lodash'
import * as Colors from 'material-ui/styles/colors';
import { List } from 'material-ui/List';

export class SidebarList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: '-1'
    }
  }

  generateChildren(children) {
    const arr = []
    this.keyIndex += 1

    if(!isArray(children) && children) {
      arr.push(children) 
      children = arr
    }
    
    if(children) {
      return children.map((child) => {
        if(child.type.name == 'SidebarListItem') {
          return React.cloneElement(child, {
            key: this.keyIndex,
            value: this.keyIndex,
            onActive: (value) => {this.setState({active: value})},
            active: this.state.active,
            nestedItems: this.generateChildren(child.props.children)
          })
        } else {
          return null
        }
      })
    } else {
      return []
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
