import React from 'react';
import { PageHeader } from 'react-bootstrap-4';

import { comingSoon } from '../../copy/coming_soon.js';

export default class ComingSoon extends React.Component {
  render() {
    return (
      <div className="container">
        <PageHeader className="title">{ comingSoon.title }</PageHeader>

        <div className="dml-logo">
          Draw My Life logo
        </div>

        <p>{ comingSoon.tagline }</p>

        {/* Move this to a button component */}
        <a className="btn btn-primary dml-button" href={ comingSoon.callToActionURL } role="button">{ comingSoon.callToActionText }</a>

        <div dangerouslySetInnerHTML={ comingSoon.description } />
      </div>
    );
  }
}
