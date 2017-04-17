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
      <div>
        <a className="btn btn-primary dml-button" href={ this.props.buttonURL } role="button">{ this.props.buttonText }</a>
      </div>
    );
  }
}
