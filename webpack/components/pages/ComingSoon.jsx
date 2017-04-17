import React from 'react';
import { PageHeader } from 'react-bootstrap-4';

import { comingSoon } from '../../copy/coming_soon.js';

export default class ComingSoon extends React.Component {
  render() {
    return (
      <div className="container">
        <PageHeader>{ comingSoon.title }</PageHeader>

        <p>{ comingSoon.lorem }</p>
      </div>
    );
  }
}
