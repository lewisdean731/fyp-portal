import { Row, Col } from "react-bootstrap";
import TextLarge from "../../components/atoms/text/large/textLarge";
import UserDetails from "../../components/organisms/ui/user/userDetails/userDetails";

function User(props) {
  return (
    <div>
      <TextLarge>My Account</TextLarge>
      <UserDetails userData={props.userData} />
    </div>
  );
}

export default User;
