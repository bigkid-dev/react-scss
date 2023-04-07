import { useEffect, useState } from "react";
import { rowData } from "../components/base";
import { Navbar } from "../components/navbar";
import { Sidebar } from "../components/sidebar";
import { Users } from "../components/users";
import { Details } from "../components/details";


export const UsersDetailsPage = () => {
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
    <div>
      <div className="dashboard">
        <Navbar />
        <div id="contents">
          <Sidebar />
          <div>
            <Details/>
          </div>
        </div>
      </div>
    </div>
  );
};
