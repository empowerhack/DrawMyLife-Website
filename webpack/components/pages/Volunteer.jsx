import React from 'react';
import { PageHeader } from 'react-bootstrap-4';

import { volunteer } from '../../copy/volunteer.js';

export default class Volunteer extends React.Component {
  render() {
    return (
      <div className="container">
        <PageHeader>{ volunteer.title }</PageHeader>
        <p>{ volunteer.lorem }</p>
      </div>
    );
  }
}
