'use strict';

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Sidebar from './Sidebar'

injectTapEventPlugin();

const pageWrapperStyle = {
  minHeight: '966px',
  padding: '0px 0px'
}

const appbarStyle = {
  backgroundColor: '#2f4050',
  boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
  position: 'fixed',
  top: 0
}

const pageStyle = {
  width: '100%',
  position: 'absolute',
  top: '64px'
}

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Title"
            style={appbarStyle}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <div style={pageStyle}>
            <Sidebar router={this.props.router}/>
            <div id="page-wrapper" className="gray-bg" style={pageWrapperStyle}>
              {this.props.children}
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
