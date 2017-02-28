import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

import { nav }    from '../copy/navigation';
import { socialMedia } from '../copy/social';

export default class Footer extends React.Component {
  render() {
    const _displayFooterItem = Object.keys(nav).map((key, index) => {
      return (
        <LinkContainer to={ '/' + key } key={ index }><a eventKey={ index }>{ nav[key] }</a></LinkContainer>
      );
    });

    const _displaySocialMedia = Object.keys(socialMedia).map((key, index) => {
      return (
        <a href={ socialMedia[key] } eventKey={ index }>{ key }</a>
      );
    });

    return (
      <footer>
        <ul>
          { _displayFooterItem }
          { _displaySocialMedia }
        </ul>
      </footer>
    );
  }
}
