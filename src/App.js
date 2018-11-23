import React, { Component } from "react";
import Login from './pages/Login';
import OnboardForm from './components/onboarding/OnboardForm';

import { firebase, db, auth } from './firebase';

class App extends Component {
  state = {
    isSignedIn: null,
    showOnbord: true
  }
  componentDidMount() {
    firebase.auth.onAuthStateChanged(async user => {
      this.setState({ isSignedIn: !!user });
      console.log("user", user);
      const u = await db.isUserOnboarded(user);
      console.log(u)
      if (user) {
        if (db.isUserOnboarded(user) === true) {
          this.setState({ showOnboard: false });
        }
      }
    });
  }


  render() {
    if (this.state.isSignedIn === false) {
      return <Login />
    }

    if (this.state.showOnbord === true) {
      return <OnboardForm />
    }
  }
}

export default App;
