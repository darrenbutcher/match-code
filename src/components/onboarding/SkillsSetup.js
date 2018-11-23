import React, { Component } from "react";

class SkillsSetup extends Component {
  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    return <div>Skills Setup</div>;
  }
}

export default SkillsSetup;