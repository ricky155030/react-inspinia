'use strict';

import React from 'react'
import * as Colors from 'material-ui/styles/colors';
import { ListItem } from 'material-ui/List';
import IconArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';

export class SidebarListItem extends React.Component {
  static defaultProps = {
    animated: true
  }

  constructor(props) {
    super(props)
  }

  convertToSmallIcon(icon) {
    const iconStyle = {
      marginTop: '10px',
      marginRight: '3px',
      width: '14px',
      fill: '#a7b1c2'
    }

    if(this.props.leftIcon) {
      return React.cloneElement(icon, {style: iconStyle})
    }

    return null
  }

  render() {
    const style = { 
      height: '46px', 
      lineHeight: '46px',
      color: '#a7b1c2',
    }

    const innerDivStyle = { 
      height: '46px', 
      padding: '0 16px 0 48px', 
      fontSize: '13px', 
      fontWeight: '600', 
      overflow: 'hidden', 
      wordBreak: 'break-all' 
    }

    if(this.props.value && this.props.active == this.props.value) {
      style.color = '#FFF'
      style.backgroundColor = '#293846'
      style.borderLeft = '3px solid #FFF'
    }

    return (
      <ListItem
        {...this.props}
        className={this.props.animated ? "animated fadeInDown" : ""}
        style={style}
        innerDivStyle={innerDivStyle}
        leftIcon={this.convertToSmallIcon(this.props.leftIcon)}
        rightIcon={this.props.nestedItems ? this.convertToSmallIcon(<IconArrowLeft />) : null}
        autoGenerateNestedIndicator={false}
        onTouchTap={() => {
          this.props.onActive(this.props.value)
          if(this.props.onTouchTap) {
            this.props.onTouchTap()
          }
        }}
      />
    )
  }
}
