import React from 'react';
import { PageHeader } from 'react-bootstrap-4';

import { comingSoon } from '../../copy/coming_soon.js';
import DMLButton from '../shared/DMLButton.jsx';

export default class ComingSoon extends React.Component {
  render() {
    return (
      <div className="coming-soon-content">
        <PageHeader className="title">{ comingSoon.title }</PageHeader>

        <div className="dml-logo"></div>

        <p>{ comingSoon.tagline }</p>

        <DMLButton buttonText={ comingSoon.callToActionText } buttonURL={ comingSoon.callToActionURL } />

        <div dangerouslySetInnerHTML={ comingSoon.description } />
      </div>
    );
  }
}
