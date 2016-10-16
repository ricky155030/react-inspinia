'use strict';

import React from 'react'
import { Card, CardHeader, CardText } from 'material-ui/Card';
import * as Colors from 'material-ui/styles/colors';
import IconRefresh from 'material-ui/svg-icons/navigation/refresh';
import { wrapperProps } from '../../factory';

const DefaultIcon = wrapperProps(IconRefresh, {
  style: {
    height: '20px',
    width: '20px',
    flexShrink: '0'
  },
  color: Colors.grey100
})

const titleIcon = (icon) => {
  return wrapperProps(icon, {
    style: {
      height: '20px',
      width: '20px',
      flexShrink: '0'
    },
    color: Colors.grey100
  })
}

export default class extends React.Component {
  static propTypes = {
    avatar: React.PropTypes.element,
    headerColor: React.PropTypes.string,
    maxHeight: React.PropTypes.string,
    header: React.PropTypes.boolean,
    title: React.PropTypes.string,
    titleColor: React.PropTypes.string
  }

  static defaultProps = {
    header: false,
    headerColor: Colors.grey400,
    titleColor: Colors.grey100,
    avatar: IconRefresh
  }

  constructor(props) {
    super(props)
  }

  render() {
    const headerStyle = { 
      backgroundColor: this.props.headerColor, 
      height: '30px', 
      paddingTop: '6px',
      display: 'flex'
    }

    const headerTitleStyle = { 
      color: this.props.titleColor,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    }

    const headerTextStyle = { 
      paddingRight: 0,
      height: '30px',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    }

    const textStyle = { 
      maxHeight: this.props.maxHeight, 
      paddingBottom: 0
    }

    this.props.maxHeight ? textStyle.overflowY = "scroll" : null

    const Icon = titleIcon(this.props.avatar)

    return(
      <Card>
        {this.props.header ? 
          <CardHeader 
            style={headerStyle}
            avatar={<Icon />}
            title={this.props.title}
            titleStyle={headerTitleStyle}
            textStyle={headerTextStyle}
          /> : null
        }
        <CardText
          style={textStyle}
        >
          {this.props.children}
        </CardText>
      </Card>
    )
  }
}
