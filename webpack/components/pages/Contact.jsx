import React from 'react';
import { PageHeader } from 'react-bootstrap-4';

import { contact } from '../../copy/contact.js';

export default class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <PageHeader>{ contact.title }</PageHeader>
        <p>{ contact.lorem }</p>
      </div>
    );
  }
}
