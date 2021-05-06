import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase/firebaseConfig";

import {
  FirebaseAuthProvider,
  IfFirebaseAuthed,
  IfFirebaseUnAuthed,
} from "@react-firebase/auth";

import { Container, Row, Col } from "react-bootstrap";
import Classes from "./App.module.scss";
import Sidebar from "./components/organisms/ui/sidebar/sidebar";
import Topbar from "./components/organisms/ui/topbar/topbar";

import Login from "./layouts/login/login";
import ROUTES, { RenderRoutes } from "./routes";

import authUtil from "./utils/auth/authutil";

function App() {
  return (
    <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
      <IfFirebaseUnAuthed>
        {() => {
          return <Login />;
        }}
      </IfFirebaseUnAuthed>
      <IfFirebaseAuthed>
        {(isSignedIn, user, providerId) => {
          return (
            <Container fluid className={Classes.app}>
              <Row>
                <Col className={Classes.topbar}>
                  <Topbar />
                </Col>
              </Row>
              <Row>
                <Col className={Classes.sidebar}>
                  <Sidebar />
                </Col>
                <Col>
                  <RenderRoutes routes={ROUTES} />
                  <button
                    onClick={() => {
                      firebase
                        .auth()
                        .currentUser.getIdToken(/* forceRefresh */ true)
                        .then(function (idToken) {
                          authUtil.verifyToken(idToken);
                        });
                    }}
                  >
                    Verify Token
                  </button>
                </Col>
              </Row>
            </Container>
          );
        }}
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
      </div>
    </FirebaseAuthProvider>
  );
}

export default App;
