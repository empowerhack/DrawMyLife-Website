import React from 'react';
import { PageHeader, Grid, Row, Col, Image } from 'react-bootstrap-4';
import { about } from '../../copy/about.js';

export default class About extends React.Component {
  render() {
    return (
      <div id="about-page" className="full-screen">
        <div className="container pt-5">
          <Grid>
            <Row>
              <Col xs={12} sm={7} md={6} mdOffset={1} smOffset={1}>
                <div className="pt-5">
                  <PageHeader>{ about.title }</PageHeader>
                  <p>{ about.lorem }</p>

                  <h2>{ about.subtitle }</h2>
                  <p>{ about.lorem }</p>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}
