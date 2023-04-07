import "../styles/details.scss";

type infoProps = {
  heading: string;
  info: string;
};
export const Info = (props: infoProps) => {
  return (
    <div className="info-data">
      <p className="info-type">{props.heading}</p>
      <p className="info">{props.info}</p>
    </div>
  );
};
