import box from "../assets/organization.png";
import "../styles/dashboard.scss";
import users from "../assets/users.png";
import guarantors from "../assets/Guarantors.png";
import loans from "../assets/₦.png";
import decision from "../assets/decisions.png";
import savings from "../assets/savings.png";
import whitelist from "../assets/whitelist.png";
import dashboard from "../assets/₦.png";
import karma from "../assets/Vector (5).png";
import org from "../assets/Vector (7).png";
import saving from "../assets/savings product.png";
import free from "../assets/free and charges.png"



export const Sidebar = () => {
  return (
    <aside id="sidebar">
      <div id="organization">
        <img src={box} className="icon" />
        <p className="nav-link">Switch Organization</p>
      </div>
      <div id="dashboard">
        <img className="icon" src={dashboard} alt="dashboard icon" />
        <p className="nav-link">Dashboard</p>
      </div>

      <div id="section">
        <div className="container">
          <img className="icon" src={users} alt="dashboard icon" />
          <p className="nav-link">Users</p>
        </div>
        <div className="container">
          <img className="icon" src={guarantors} alt="dashboard icon" />
          <p className="nav-link">Guarantors</p>
        </div>
        <div className="container">
          <img className="icon" src={loans} alt="dashboard icon" />
          <p className="nav-link">Loans</p>
        </div>
        <div className="container">
          <img className="icon" src={decision} alt="dashboard icon" />
          <p className="nav-link">Desicion Models</p>
        </div>
        <div className="container">
          <img className="icon" src={savings} alt="dashboard icon" />
          <p className="nav-link">Savings</p>
        </div>
        <div className="container">
          <img className="icon" src={loans} alt="dashboard icon" />
          <p className="nav-link">Loan Requests</p>
        </div>
        <div className="container">
          <img className="icon" src={whitelist} alt="dashboard icon" />
          <p className="nav-link">Whitelist</p>
        </div>
        <div className="container">
          <img className="icon" src={karma} alt="dashboard icon" />
          <p className="nav-link">Karma</p>
        </div>
      </div>
      <p id="customer">CUSTOMERS</p>

      <div id="business-section">
        <p id="business">BUSINESS</p>
        <div id="container">
          <img className="icon" src={org} alt="dashboard icon" />
          <p className="nav-link">Organization</p>
        </div>
        <div className="container">
          <img className="icon" src={whitelist} alt="dashboard icon" />
          <p className="nav-link">Loan Products</p>
        </div>
        <div className="container">
          <img className="icon" src={free} alt="dashboard icon" />
          <p className="nav-link">Savings and Charges</p>
        </div>
        <div className="container">
          <img className="icon" src={dashboard} alt="dashboard icon" />
          <p className="nav-link">Transactions</p>
        </div>
        <div className="container">
          <img className="icon" src={dashboard} alt="dashboard icon" />
          <p className="nav-link">Services</p>
        </div>
        <div className="container">
          <img className="icon" src={dashboard} alt="dashboard icon" />
          <p className="nav-link">Service Account</p>
        </div>
        <div className="container">
          <img className="icon" src={dashboard} alt="dashboard icon" />
          <p className="nav-link">Settlements</p>
        </div>
        <div className="container">
          <img className="icon" src={dashboard} alt="dashboard icon" />
          <p className="nav-link">Reports</p>
        </div>
      </div>
      <div id="settings">
        <p id="settings-text">SETTINGS</p>
        <div className="container">
          <img className="icon" src={dashboard} alt="dashboard icon" />
          <p className="nav-link">Preferences</p>
        </div>
        <div className="container">
          <p className="nav-link">Fees and pricing</p>
        </div>
        <div className="container">
          <p className="nav-link">Audit Logs</p>
        </div>
      </div>
    </aside>
  );
};
