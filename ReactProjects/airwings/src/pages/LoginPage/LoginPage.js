import CustomInput from "../../components/CustomInput/CustomInput";
import { IoIosMail } from "react-icons/io";
import "./styles.css";

function LoginPage() {
  return (
    <div className="loginPageBaseContainer">
      <div className="loginPageContentCardBaseContainer">
        <div className="loginPageContentContainer">
          <div className="loginPageHeaderContainer">
            <h1>Welcome Back 👋</h1>
          </div>
          <div className="loginPageInputContainer">
            <div className="loginPageInputTitleContainer">
              <p>Please enter your details</p>
            </div>
            <div className="loginPageInputBaseContainer">
              <CustomInput
                placeholder={"Enter email"}
                Icon={IoIosMail}
                type={"email"}
              />
              <CustomInput
                placeholder={"Enter Password"}
                type={"password"}
                isSecureEntry={true}
              />
            </div>
            <div className="loginPageInputForgetContainer"></div>
          </div>
          <div className="loginPageButtonContainer"></div>
        </div>
        <div className="loginPageImageContainer"></div>
      </div>
    </div>
  );
}

export default LoginPage;
