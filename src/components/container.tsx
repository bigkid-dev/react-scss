import "../styles/dashboard.scss"
import icon2 from "../assets/icon.png"

type usersProps = {
  url: string
  actives : string
  no: string
};

export const Container = (props: usersProps) => {
  return (
    <div className="user-info">
      <img src={props.url} id="icons" />
      <p id="actives">{props.actives}</p>
      <h2 id="actives-no">{props.no}</h2>
    </div>
  );
};
