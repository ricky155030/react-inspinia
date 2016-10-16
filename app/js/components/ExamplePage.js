'use strict';

import React from 'react'
import { Grid, Row } from 'react-flexbox-grid'
import * as Colors from 'material-ui/styles/colors'
import Page from './Page'
import Card from './Page/Card'
import MarginCol from './Page/MarginCol'

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
            <MarginCol lg={12} md={12} sm={12} xs={12}>
              <Card>
                <h2>Hello, this is Example Page</h2> 
              </Card>
            </MarginCol>
          </Row>
          <Row>
            <MarginCol lg={3} md={6} sm={12} xs={12}>
              <Card>
                <h2>Example Card without header</h2>
              </Card>
            </MarginCol>
            <MarginCol lg={3} md={6} sm={12} xs={12}>
              <Card
                header={true}
                title="Title Text"
              >
                <h2>Example Card with header</h2>
              </Card>
            </MarginCol>
          </Row>
        </Grid>
      </Page>
    )
  }
}

export default ExamplePage
