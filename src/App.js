import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase/firebaseConfig";

import {
  FirebaseAuthProvider,
  IfFirebaseAuthed,
  IfFirebaseUnAuthed,
  FirebaseAuthConsumer,
} from "@react-firebase/auth";

import { Container, Row, Col } from "react-bootstrap";
import Classes from "./App.module.scss";
import Sidebar from "./components/organisms/ui/sidebar/sidebar";
import Topbar from "./components/organisms/ui/topbar/topbar";

import Login from "./layouts/login/login";
import { RenderRoutes } from "./routes";

import { verifyToken } from "./utils/auth/authUtil";

function App() {
  return (
    <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
      <IfFirebaseUnAuthed>
        {() => {
          return <Login />;
        }}
      </IfFirebaseUnAuthed>
      <IfFirebaseAuthed>
        <FirebaseAuthConsumer>
          {({ isSignedIn, user, providerId }) => {
            const userJson = JSON.parse(
              JSON.stringify({ isSignedIn, user, providerId })
            );
            console.log(userJson);
            return (
              <div fluid className={Classes.app}>
                <Topbar userData={userJson} />
                <Container fluid>
                  <Row>
                    <Col className={Classes.sidebar}>
                      <Sidebar />
                    </Col>
                    <Col>
                      <RenderRoutes userData={userJson} />
                    </Col>
                  </Row>
                </Container>
              </div>
            );
          }}
        </FirebaseAuthConsumer>
      </IfFirebaseAuthed>
      <div className={Classes.debugAuthButtons}>
        <button
          onClick={() => {
            firebase.auth().signOut();
          }}
        >
          Sign Out
        </button>
        <button
          onClick={() => {
            firebase.auth().signInAnonymously();
          }}
        >
          Sign In Anon.
        </button>
        <button
          onClick={() => {
            firebase
              .auth()
              .currentUser.getIdToken(/* forceRefresh */ true)
              .then(function (idToken) {
                verifyToken(idToken);
              });
          }}
        >
          Verify Token
        </button>
      </div>
    </FirebaseAuthProvider>
  );
}

export default App;
