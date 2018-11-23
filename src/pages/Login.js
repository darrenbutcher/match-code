import React, { Component } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Styled from "styled-components";
// import Tutorial from "../components/Tutorial";
// import firebase from '../firebase'

// firebase.initializeApp({
//   apiKey: "AIzaSyDNwfiSEvsmKQmlDYhCwYBOyHn3ynd0z2U",
//   authDomain: "wize-manger.firebaseapp.com",
//   databaseURL: "https://wize-manger.firebaseio.com",
//   projectId: "wize-manger",
//   storageBucket: "wize-manger.appspot.com",
//   messagingSenderId: "824474624504"
// });

const Wrapper = Styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`;

const Header = Styled.div`
  margin-top: 40px;
  text-align: center;
`;

class Login extends Component {
  state = { isSignedIn: false };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
      console.log("user", user);
    });
  };

  render() {
    return (
      <Wrapper>
        <Header>
          <h1>PWR Match</h1>
          <h4>Connect to others around you with same interest and skills.</h4>
          <h5>How to Connect</h5>
        </Header>
        <StyledFirebaseAuth
          uiConfig={this.uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </Wrapper>
    );
  }
}

export default Login;






// import React, { Component } from "react";
// import firebase from "firebase";
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
// import Tutorial from "../components/Tutorial";
// import Styled from "styled-components";

// firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
// });

// const Name = Styled.div`
//   text-align: center;
// `;

// const SocialLogin = Styled.div`
//   /* display: flex;
//   align-items: flex-end; */
// `;

// const Content = Styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   height: 100vh;
// `;

// class Login extends Component {
//   state = {
//     isSignedIn: false
//   };
//   uiConfig = {
//     signInFlow: "popup",
//     // signInSuccessUrl: "/",
//     signInOptions: [
//       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//       firebase.auth.FacebookAuthProvider.PROVIDER_ID
//     ],
//     callbacks: { SignInSuccess: () => false }
//   };

//   componentDidMount() {
//     firebase.auth().onAuthStateChanged(user => {
//       this.setState({ isSignedIn: !!user });
//     });
//   }

//   render() {
//     if (this.state.isSignedIn === false) {
//       return (
//         <Content>
//           <Name>
//             <h1>PWR Match</h1>
//             <p>
//               Your way to connect with others with similar interests or skills.
//             </p>
//           </Name>
//           <Tutorial />
//           <SocialLogin>
//             <StyledFirebaseAuth
//               uiConfig={this.uiConfig}
//               firebaseAuth={firebase.auth()}
//             />
//           </SocialLogin>
//         </Content>
//       );
//     } else {
//       // return <Event />;
//       return (
//         <div>
//           <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
//         </div>
//       );
//     }
//   }
// }

// export default Login;
