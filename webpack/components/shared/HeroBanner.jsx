import React from 'react';

export default class DMLButton extends React.Component {
  static get propTypes() {
    return {
      bannerHeading: React.PropTypes.string.required,
      bannerTagline: React.PropTypes.string,
      bannerBody: React.PropTypes.string
    };
  }

  render() {
    return (
      <div className="banner-content">
        <h1>{ this.props.bannerHeading }</h1>
        <h3>{ this.props.bannerTagline }</h3>
        <p>{ this.props.bannerBody }</p>
      </div>
    );
  }
}
