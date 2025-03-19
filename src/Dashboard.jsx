import React, { Component } from "react";
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div></div>;
  }
  componentDidMount() {
    document.title = "Dashboard - eCommerce";
  }
}
