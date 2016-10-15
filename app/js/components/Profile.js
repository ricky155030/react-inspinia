'use strict';

import React from 'react'
import * as Colors from 'material-ui/styles/colors'
import IconArrowDown from 'material-ui/svg-icons/navigation/arrow-drop-down';

export class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      anchorEl: null
    }
  }

  render() {
    return (
      <div>
        <div className="nav-header" style={{ backgroundColor: '#293846' }}>
          <div className="dropdown">
            <img className="img-circle" src="http://webapplayers.com/inspinia_admin-v2.6.2.1/img/profile_small.jpg" alt="" />
            <div 
              ref="dropdown"
              data-toggle="dropdown"
              style={{marginTop: '10px', cursor: 'pointer'}}
            >
              <strong style={{color: '#FFF'}}>{this.props.name}</strong>
              <p> {this.props.role} <b className="caret"></b> </p>
            </div>
            <ul className="dropdown-menu animated fadeIn">
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
