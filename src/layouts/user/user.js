import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import TextLarge from "../../components/atoms/text/large/textLarge";
import UserDetails from "../../components/organisms/ui/user/userDetails/userDetails";
import UserTeamData from "../../components/organisms/ui/user/userTeamData/userTeamData";
import { getUserFirestoreInformation } from "../../utils/apiUtil";

function User(props) {
  
  const [userFirestoreData, setUserFirestoreData] = useState("");

  useEffect(async() => {
    await getUserFirestoreInformation(props.userData.user["uid"], props.userData.user.stsTokenManager["accessToken"])
    .then((data) => {
      console.log(data)
      setUserFirestoreData(data)
    });
  }, []);

  return (
    <div>
      <TextLarge>My Account</TextLarge>
      <UserDetails userData={props.userData}  />
      <UserTeamData userFirestoreData={userFirestoreData} />
    </div>
  );
}

export default User;
