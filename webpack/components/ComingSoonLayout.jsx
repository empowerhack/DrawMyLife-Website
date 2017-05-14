import React from 'react';
import { comingSoon } from '../copy/coming_soon.js';

export default class ComingSoonLayout extends React.Component {
  static get propTypes() {
    return {
      children: React.PropTypes.any
    };
  }

  render() {
    return (
      <div>
        <div className="container-fluid coming-soon-wrapper">
            { this.props.children }
        </div>
        <div className="coming-soon-footer">
          { comingSoon.footerLine }
        </div>
      </div>
    );
  }
}
