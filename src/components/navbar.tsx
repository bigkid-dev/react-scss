import logo from "../assets/Union.png";
import "../styles/dashboard.scss";
import search from "../assets/Vector.png";
import bell from "../assets/notification.png";
import image from "../assets/image.png";
import dropdown from "../assets/dopdown.png";


export const Navbar = () => {
  return (
    <div className="nav">
      <div className="union">
        <img
          src={logo}
          style={{
            position: "absolute",
            left: "2.08%",
            right: "96.48%",
            top: "36.39px",
            bottom: "42.78%",
            width: "20.63px",
            height: "20.84px",

            /* 1 */
          }}
          alt="logo"
        />
        <h2 className="lendsqr">lendsqr</h2>
      </div>
      <form>
        <div className="search-bar">
          <input id="search" placeholder="search for anything" />
          <button id="search-btn">
            <img src={search} />
          </button>
        </div>
      </form>
      <p id="docs">
        <a href="#">Docs</a>
      </p>
      <div>
        <img src={bell} alt="notification bell" id="bell" />
      </div>
      <div className="user-img">
        <img src={image} alt="image of the user"/>
      </div>
      <p id="name">Adedeji</p>
      <img id="drop-dwn" src={dropdown}></img>
    </div>
  );
};
