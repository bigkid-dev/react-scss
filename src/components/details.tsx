import { Container } from "./container";
import icon2 from "../assets/icon.png";
import "../styles/details.scss";
import icon from "../assets/back.png";
import person from "../assets/person.png";
import starred from "../assets/starred.png";
import star from "../assets/star.png";
import { InfoContainer } from "./info-container";
import { useEffect, useState } from "react";
import { infoProps } from "../types/info";

export const Details = () => {

  const [data, setData] = useState<infoProps[]>([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
      );
      //
      const json = await response.json();
      
      setData(json);
      console.log(json);
    }
    fetchData();
  }, []);
  const fname = data.filter((item) => item.profile.firstName);
  const lname = data.filter((item) => item.profile.lastName);
  return (
    <div id="main">
      <img id="back-icon" src={icon}></img>
      <p id="prev-nav">Back to Users</p>
      <p id="heading">User Detail</p>
      <div className="container-section">
        <div className="top">
          <div id="avatar">
            <img src={person} id="person-icon" />
          </div>
          <div id="name-con">
            <p id="user-name">Grace Effiom</p>
            <p id="code">LSQFf587g90</p>
          </div>
          <div id="tier">
            <p>user's tier</p>
            <div>
              <img src={starred}></img>
              <img src={star}></img>
              <img src={star}></img>
            </div>
          </div>
          <div id="bank">
            <p id="price">₦200,000</p>
            <p id="acct">9912345678/Providus Bank</p>
          </div>
        </div>

        <div id="bottom-nav">
          <div id="gen-details">General details</div>
          <div id="documents">Documents</div>
          <div id="bank-details">Bank details</div>
          <div id="loans">Loans</div>
          <div id="savings">Savings</div>
          <div id="app">App and Systems</div>
        </div>
      </div>
      <div className="full-info">
        {data.map((items, index) => (
          <div key={index}>
            <h1></h1>
            <InfoContainer
              heading="Personal Information"
              key1="Full Name"
              key2={items.phoneNumber}
              phoneNumber={items.phoneNumber}
              key3={items.email}
              email={items.email}
              profile={items.profile}
              key5={items.profile.gender}
              education={items.education}
              socials={items.socials}
              key4={items.profile.bvn}
              key6={"Single"}
              key7={"None"}
              key8={"Parents Apartment"}
              key9={""}
              key10={""}
              guarantor={items.guarantor}
              value1={"FULLNAME"}
              value2={"PHONE NUMBER"}
              value3={"EMAIL ADDRESS"}
              value4={"BVN"}
              value5={"GENDER"} value6={"MARITAL STATUS"} value7={"CHILDREN"} value8={"TYPE OF RESIDENCE"}            />

            <InfoContainer
              heading="Education and Employment"
              key1={items.education.level}
              key2={items.education.employmentStatus}
              phoneNumber={items.education.sector}
              key3={items.education.sector}
              email={items.email}
              profile={items.profile}
              key5={items.education.officeEmail}
              education={items.education}
              socials={items.socials}
              key4={items.education.duration}
              key6={"items.education.monthlyIncome"}
              key7={""}
              key8={""}
              key9={""}
              key10={""}
              guarantor={items.guarantor}
              value1={"LEVEL OF EDUCATION"}
              value2={"EMPLOYMENT STATUS"}
              value3={"SECTOR OF EMPLOYMENT"}
              value4={"DURATION OF EMPLOYMENT"}
              value5={"MONTHLY INCOME"} value6={"LOAN REPAYMENT"} value7={""} value8={""}            />
            <InfoContainer
              heading="Socials"
              key1={items.socials.twitter}
              key2={items.socials.facebook}
              phoneNumber=""
              key3={items.socials.instagram}
              email=""
              profile={items.profile}
              key5=""
              education={items.education}
              socials={items.socials}
              key4={""}
              key6={""}
              key7={""}
              key8={""}
              key9={""}
              key10={""}
              guarantor={items.guarantor}
              value1={"TWITTER"}
              value2={"FACEBOOK"}
              value3={"INSTAGRAM"}
              value4={""}
              value5={""} value6={""} value7={""} value8={""}            />

            <InfoContainer
              heading="Guarantor"
              key1={items.guarantor.firstName}
              key2={items.guarantor.phoneNumber}
              phoneNumber=""
              key3={items.guarantor.relationship}
              email=""
              profile={items.profile}
              key5=""
              education={items.education}
              socials={items.socials}
              key4={""}
              key6={""}
              key7={""}
              key8={""}
              key9={""}
              key10={""}
              guarantor={items.guarantor}
              value1={"FULL NAME"}
              value2={"PHONE NUMBER"}
              value3={"EMAIL ADDRESS"}
              value4={"RELATIONSHIP"}
              value5={""} value6={""} value7={""} value8={""}            />
          </div>
        ))}
      </div>
    </div>
  );
};
