import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { about } from '../../copy/about.js';

export default class About extends React.Component {
  render() {
    return (
      <div className="container">
        <PageHeader>{ about.title }</PageHeader>
        <p>{ about.lorem }</p>
      </div>
    );
  }
}
