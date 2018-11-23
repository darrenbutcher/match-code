import React, { Component } from "react";

class AboutYourself extends Component {
  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    return <div>About Yourself</div>;
  }
}

export default AboutYourself;