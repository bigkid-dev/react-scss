import "../styles/dashboard.scss";
import { Container } from "./container";
import icon2 from "../assets/icon.png";

export const Users = () => {
  return (
    <div id="main">
      <p id="heading">Users</p>
      <div className="container-section">
        <Container url={icon2} actives="USERS" no={"2,453"}></Container>
        <Container url={icon2} actives="ACTIVE USERS" no={"2,453"}></Container>
        <Container url={icon2} actives="USERS WITH LOANS" no={"12,453"}></Container>
        <Container url={icon2} actives="USERS WITH SAVINGS" no={"102,453"}></Container>
      </div>
    </div>
  );
};
