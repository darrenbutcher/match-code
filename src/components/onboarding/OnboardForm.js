import React, { Component } from "react";
import AboutYourself from './AboutYourself';
import InterestsSetup from './InterestsSetup';
import ProfileSetup from './ProfileSetup';
import SkillsSetup from './SkillsSetup';

class OnboardForm extends Component {
  state = {
    step: 1,
    firstname: '',
    lastname: '',
    bio: '',
    email: '',
    phone: '',
    skills: [],
    interets: []
  }

  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1
    })
  }

  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1
    })
  }

  handleChange = input => event => {
    this.setState({ [input]: event.target.value })
  }

  render() {
    const { step } = this.state;
    const { firstname, lastname, bio, email, phone, skills, interets } = this.state;
    const values = { firstname, lastname, bio, email, phone, skills, interets };
    switch (step) {
      case 1:
        return <ProfileSetup
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          values={values}
        />
      case 2:
        return <AboutYourself
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
        />
      case 3:
        return <SkillsSetup
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          values={values}
        />
      case 4:
        return <InterestsSetup
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          values={values}
        />
      default:
        return <div />
    }
  }
}

export default OnboardForm;