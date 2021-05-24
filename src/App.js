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

const signOut = () => {
  firebase.auth().signOut();
};

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
              <div className={Classes.app}>
                <Topbar userData={userJson} signOut={signOut} />
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
    </FirebaseAuthProvider>
  );
}

export default App;
