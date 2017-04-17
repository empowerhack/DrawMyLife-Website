import React from 'react';
import { PageHeader } from 'react-bootstrap-4';

import { partners } from '../../copy/partners.js';

export default class Partners extends React.Component {
  render() {
    return (
      <div className="container">
        <PageHeader>{ partners.title }</PageHeader>
        <p>{ partners.lorem }</p>
      </div>
    );
  }
}
