import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import TextLarge from "../../components/atoms/text/large/textLarge";
import UserDetails from "../../components/organisms/ui/user/userDetails/userDetails";
import { getUserFirestoreInformation } from "../../utils/apiUtil";

function User(props) {
  
  const [userFirestoreData, setUserFirestoreData] = useState("");

  useEffect(async () => {
    const data = await getUserFirestoreInformation(props.userData.user["uid"], props.userData.user.stsTokenManager["accessToken"])
    setUserFirestoreData(data)
  });

  return (
    <div>
      <TextLarge>My Account</TextLarge>
      <UserDetails userData={props.userData} userFirestoreData={userFirestoreData} />
    </div>
  );
}

export default User;
