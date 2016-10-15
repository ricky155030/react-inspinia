'use strict';

import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Sidebar from './Sidebar'

injectTapEventPlugin();

const pageWrapperStyle = {
  minHeight: '966px'
}

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Sidebar />
          <div id="page-wrapper" className="gray-bg" style={pageWrapperStyle}>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
