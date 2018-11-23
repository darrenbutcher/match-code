import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class ProfileSetup extends Component {
  saveAndContinue = (e) => {
    e.preventDefault()
    this.props.nextStep()
  }

  render() {
    return (
      <form>

      </form>
    )
  }
}

export default ProfileSetup;