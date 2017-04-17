import React from 'react';

export default class ComingSoonLayout extends React.Component {
  static get propTypes() {
    return {
      children: React.PropTypes.any
    };
  }

  render() {
    return (
      <div className="page-wrap coming-soon">

        <div className="container-fluid">
          <div className="wrapper">
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }
}
