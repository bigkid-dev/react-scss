import "../styles/details.scss";
import { Info } from "./info";
import { infoProps } from "../types/info";

export const InfoContainer = (props: infoProps) => {
  const { profile } = props;
  const { education } = props;
  const { socials } = props;
  // const {guarantor} =props
  const fullname = `${profile.lastName} ${profile.firstName}`;
  return (
    <div className="info-con">
      <p id="header">{props.heading} </p>
      <div className="info-row">
        <Info heading={props.value1} info={props.key1} />
        <Info heading={props.value2} info={props.key2} />
        <Info heading={props.value3} info={props.key3} />
        <Info heading={props.value4} info={props.key4} />
        <Info heading={props.value5} info={props.key5} />
      </div>
      <div className="info-row">
        <Info heading={props.value6} info={props.key6} />
        <Info heading={props.value7} info={props.key7} />
        <Info heading={props.value8} info={props.key8} />
      </div>
    </div>
  );
};
