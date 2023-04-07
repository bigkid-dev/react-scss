import { type } from "os";
import "../styles/dashboard.scss";
import filter from "../assets/filter-results-button.png";

export type rowData = {
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
  gender: string;
};

type tableProps = {
  data: rowData[];
};

export const UserBase = (props: tableProps) => {
  return (
    <section id="base">
      <table id="table">
        <thead id="header">
          <div className="row">
            <div className="col-org">
              Organization<img src={filter}></img>
            </div>
            <div className="col-username">
              username<img src={filter}></img>
            </div>
            <div className="col-email">
              email<img src={filter}></img>
            </div>
            <div className="col-phone">
              phone no<img src={filter}></img>
            </div>
            <div className="col-date">
              date joined<img src={filter}></img>
            </div>
            <div className="col-status">
              status<img src={filter}></img>
            </div>
          </div>
        </thead>
        <tbody>
          {props.data.map((row: rowData, index: number) => (
            <div key={index} className="row">
              <div className="col-org">
                <p>{row.orgName}</p>
              </div>
              <div className="col-username">
                <p>{row.userName}</p>
              </div>
              <div className="col-email">
                <p>{row.email}</p>
              </div>
              <div className="col-phone">
                <p>{row.phoneNumber}</p>
              </div>
              <div className="col-date">
                <p>{row.createdAt}</p>
              </div>
              <div className="col-status">
                <p>{row.gender}</p>
              </div>
            </div>
          ))}
        </tbody>
      </table>
    </section>
  );
};
