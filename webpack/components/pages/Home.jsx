import React from 'react';
import { PageHeader } from 'react-bootstrap-4';

import { homepage } from '../../copy/home.js';
import DMLButton from '../shared/DMLButton.jsx';
import HeroBanner from '../shared/HeroBanner.jsx';

export default class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <HeroBanner bannerHeading={ homepage.title } bannerTagline={ homepage.tagline } bannerBody={ homepage.body } />
        <DMLButton buttonText={ homepage.primaryBannerButtonText } buttonURL={ homepage.primaryBannerButtonUrl }/>
        <DMLButton buttonText={ homepage.secondaryBannerButtonText } buttonURL={ homepage.secondaryBannerButtonUrl }/>
      </div>
    );
  }
}
