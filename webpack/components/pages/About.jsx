import React from 'react';
import { PageHeader, Grid, Row, Col, Image } from 'react-bootstrap-4';
import { about } from '../../copy/about.js';

export default class About extends React.Component {
  render() {
    return (
      <div>
        <Image src="http://lorempixel.com/output/cats-q-c-1600-1000-9.jpg"
          className="full-screen" alt="Draw My Life team photo"/>
        <div className="container">
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
      </div>
    );
  }
}
