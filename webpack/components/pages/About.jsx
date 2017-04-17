import React from 'react';
import { PageHeader, Grid, Row, Col, Image } from 'react-bootstrap';

import { about } from '../../copy/about.js';

export default class About extends React.Component {
  render() {
    return (
      <div className="container">
        <Image src="http://lorempixel.com/output/cats-q-c-1920-1200-8.jpg" className="cover-image"/>
        <Grid>
          <Row>
            <Col xs={12} sm={7} md={6} mdOffset={2} smOffset={1}>
              <PageHeader>{ about.title }</PageHeader>
              <p>{ about.lorem }</p>

              <h2>{ about.subtitle }</h2>
              <p>{ about.lorem }</p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
