import React from 'react';

export default class ComingSoonLayout extends React.Component {
  static get propTypes() {
    return {
      children: React.PropTypes.any
    };
  }

  render() {
    return (
      <div className="container-fluid coming-soon-wrapper">
          { this.props.children }
      </div>
    );
  }
}
