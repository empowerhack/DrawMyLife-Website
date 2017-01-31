import React from 'react';
import { PageHeader } from 'react-bootstrap';

import { homepage } from '../../copy/home.js';

export default class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <PageHeader>{ homepage.title }</PageHeader>
        <p>{ homepage.lorem }</p>
      </div>
    );
  }
}
