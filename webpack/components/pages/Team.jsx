import React from 'react';
import { PageHeader } from 'react-bootstrap';

import { team } from '../../copy/team.js';

export default class Team extends React.Component {
  render() {
    return (
      <div className="container">
        <PageHeader>{ team.title }</PageHeader>
        <p>{ team.lorem }</p>
      </div>
    );
  }
}
