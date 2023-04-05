import logo from "../assets/Union.png";
import "../styles/login.scss";
import { Pablo } from "./pablo";

export const Logo = () => {
  return (
    <div className="logo">
      <div className="union">
        <img
          src={logo}
          style={{
            position: "absolute",
            width: "24.75px",
            height: "25px",
            left: "97px",
            top: "107.67px",
          }}
        />
      </div>

      <h2 className="lendsqr">lendsqr</h2>

      <Pablo />
    </div>
  );
};
