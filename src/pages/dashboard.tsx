import { useEffect, useState } from "react";
import { UserBase } from "../components/base";
import { Navbar } from "../components/navbar";
import { Sidebar } from "../components/sidebar";
import { Users } from "../components/users";
import "../styles/dashboard.scss";
import { rowData } from "../components/base";

export const DashboardPage = () => {
  const [data, setData] = useState<rowData[]>([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
      );
      //
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <Navbar />
      <div id="contents">
        <Sidebar />
        <div>
          <Users />
          <UserBase data={data} />
        </div>
      </div>
    </div>
  );
};
