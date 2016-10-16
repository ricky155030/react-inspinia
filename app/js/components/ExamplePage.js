'use strict';

import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import * as Colors from 'material-ui/styles/colors';
import Page from './Page'

class ExamplePage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Page
        headerTitle="Example"
        footerTitle="This is footer"
      >
        <Grid fluid>
          <Row>
            <Col lg={12} md={12} sm={12} xs={12}>
              <h2>Hello, this is Example Page</h2> 
            </Col>
          </Row>
        </Grid>
      </Page>
    )
  }
}

export default ExamplePage
