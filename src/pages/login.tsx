import { Logo } from "../components/logo";
import "../styles/login.scss";
import { Base } from "../components/input-field-base";

export const LoginPage = () => {
  return (
    <div className="layout">
      <Logo />
      <Base/>
    </div>
  );
};
