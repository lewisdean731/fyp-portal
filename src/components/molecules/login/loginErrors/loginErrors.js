import Classes from "./loginErrors.module.scss";
import TextSmall from "../../../atoms/text/small/textSmall";

const LoginErrors = (props) => {
  return (
    <div className={Classes.LoginErrors}>
      <TextSmall colour={"red"}>
        {props.errMessage} {props.errCode}
      </TextSmall>
    </div>
  );
};

export default LoginErrors;
