import React, { Component } from "react";

class InterestsSetup extends Component {
  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    return <div>Interests Setup</div>;
  }
}

export default InterestsSetup;