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

        <h2>{ comingSoon.tagline }</h2>

        <div dangerouslySetInnerHTML={ comingSoon.description } />

        <DMLButton buttonText={ comingSoon.callToActionText } buttonURL={ comingSoon.callToActionURL } />

        <div dangerouslySetInnerHTML={ comingSoon.moreInfo } />

        <a href="http://empowerhack.io#drawmylife"><img className="eh-logo" width="100" src="/assets/images/empowerhack-logo.png" /></a>
      </div>
    );
  }
}
