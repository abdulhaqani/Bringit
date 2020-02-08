import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Navbar extends Component {
  static defaultProps = {
    title: 'default'
  };
  static propTypes = {
    title: PropTypes.string.isRequired
  };
  render() {
    return <div>{this.props.title}</div>;
  }
}

export default Navbar;
