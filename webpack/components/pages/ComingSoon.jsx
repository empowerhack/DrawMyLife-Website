import React from 'react';
import { PageHeader } from 'react-bootstrap-4';
import { comingSoon } from '../../copy/coming_soon.js';
import DMLButton from '../shared/DMLButton.jsx';
import EmpowerHackLogo from '../../assets/images/empowerhack-logo.png';

export default class ComingSoon extends React.Component {
  render() {
    return (
      <div className="coming-soon-content">
        <h2>{ comingSoon.tagline }</h2>

        <div className="dml-logo"></div>

        <div dangerouslySetInnerHTML={ comingSoon.description } />

        <DMLButton buttonText={ comingSoon.callToActionText } buttonURL={ comingSoon.callToActionURL } />

        <div dangerouslySetInnerHTML={ comingSoon.moreInfo } />

        <a href="http://empowerhack.io#drawmylife"><img className="eh-logo" width="100" src={EmpowerHackLogo} /></a>
      </div>
    );
  }
}
