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


        <div className="container-fluid p-0 m-0">
          <Nav />
          <div className="wrapper">
            { this.props.children }
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
