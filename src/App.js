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
import Topbar from "./components/organisms/ui/topbar/topbar";

import Login from "./layouts/login/login";
import { RenderRoutes } from "./routes";
import Footer from "./components/molecules/ui/footer/footer";

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
              <div>
                <div className={Classes.app}>
                  <Topbar userData={userJson} signOut={signOut} />
                  <Container className={Classes.appCentre}>
                    <Row>
                      <Col>
                        <br />
                        <RenderRoutes userData={userJson} />
                        <br />
                      </Col>
                    </Row>
                  </Container>
                </div>
                <Container className={Classes.footer}>
                  <Footer />
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
