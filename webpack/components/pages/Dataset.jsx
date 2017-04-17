import React from 'react';
import { PageHeader } from 'react-bootstrap-4';

import { dataset } from '../../copy/dataset.js';

export default class Dataset extends React.Component {
  render() {
    return (
      <div className="container">
        <PageHeader>{ dataset.title }</PageHeader>
        <p>{ dataset.lorem }</p>
      </div>
    );
  }
}
