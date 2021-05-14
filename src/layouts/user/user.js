import TextLarge from "../../components/atoms/text/large/textLarge";
import UserDetails from "../../components/organisms/ui/user/userDetails/userDetails";
import UserTeamData from "../../components/organisms/ui/user/userTeamData/userTeamData";

function User(props) {

  return (
    <div>
      <TextLarge>My Account</TextLarge>
      <UserDetails userData={props.userData} />
      <br />
      <UserTeamData uid={props.userData.user["uid"]} token={props.userData.user.stsTokenManager["accessToken"]} />
    </div>
  );
}

export default User;
