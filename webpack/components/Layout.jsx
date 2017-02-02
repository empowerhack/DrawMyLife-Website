import React from 'react';

import Nav from './Nav.jsx';
import Footer from './Footer.jsx';

export default class Layout extends React.Component {
  static get propTypes() {
    return {
      children: React.PropTypes.any
    };
  }

  render() {
    return (
      <div className="page-wrap">
        <Nav />

        <div className="container-fluid">
          <div className="wrapper">
            { this.props.children }
          </div>
        </div>
        
        <Footer />
      </div>
    );
  }
}
