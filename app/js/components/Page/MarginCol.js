'use strict';

import React from 'react'
import { Col } from 'react-flexbox-grid'
import { wrapperProps } from '../../factory'

const MarginCol = wrapperProps(Col, {
  style: {
    marginBottom: '20px'
  }
})

export default MarginCol
