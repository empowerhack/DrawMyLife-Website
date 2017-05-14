import React from 'react';

export default class DMLButton extends React.Component {
  static get propTypes() {
    return {
      buttonText: React.PropTypes.string,
      buttonURL: React.PropTypes.string
    };
  }

  render() {
    return (
      <button className="btn btn-primary dml-button" role="button">
        <a href={ this.props.buttonURL }>{ this.props.buttonText }</a>
      </button>
    );
  }
}
