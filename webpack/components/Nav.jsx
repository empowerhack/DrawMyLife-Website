import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { NavItem } from 'react-bootstrap';

import { nav }  from '../copy/navigation';

export default class Nav extends React.Component {
  render() {
    const _displayNavItem = Object.keys(nav).map((key, index) => {
      return (
        <LinkContainer to={ '/' + key } key={ index }><NavItem eventKey={ index }>{ nav[key] }</NavItem></LinkContainer>
      );
    });

    return (
      <nav className="navbar navbar-fixed-top">
        <a className="navbar-brand" href="/#/home"> Draw My Life</a>
        <button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar2" aria-controls="exCollapsingNavbar2" aria-expanded="false" aria-label="Toggle navigation">
          &#9776;
        </button>
        <div className="collapse navbar-collapse" id="exCollapsingNavbar2">
        <ul className="nav navbar-nav pull-right">
            { _displayNavItem }
          </ul>
        </div>
      </nav>
    );
  }
}
