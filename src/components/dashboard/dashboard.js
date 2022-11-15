import React, { useState } from "react";
import SideBar from "../sidebar/SideBar";
import "./dashboard.css";
import { chartData } from "../chart/Data";
import BarChart from "../chart/BarChart";
import DataTable from "../table/dataTable";
import LineChart from "../chart/LineChart";
import PieChart from "../chart/PieChart";
import Header from "./header";

function Dashboard() {
  
  const [userData] = useState({
    labels: chartData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: chartData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(252, 159, 91, 0.85)",
          "rgba(8, 155, 171, 0.85)",
          "rgba(230, 65, 65, 0.85)",
          "rgba(8, 155, 171, 0.85)",
          "rgba(230, 65, 65, 0.85)",
        ],
        borderRadius: 8,
      },
      {
        label: "Users Lost",
        data: chartData.map((data) => data.userLost),
        backgroundColor: [
          "rgba(8, 155, 171, 0.85)",
          "rgba(252, 159, 91, 0.85)",
          "rgba(230, 65, 65, 0.85)",
          "rgba(8, 155, 171, 0.85)",
          "rgba(230, 65, 65, 0.85)",
        ],
        borderRadius: 8,
      },
    ],
  });
  return (
    <div>
      <SideBar />
      <Header/>
      <div style={{ marginLeft: "240px" }}>
        <div className="m-auto mt-5 p-5 shadow-sm" style={{ width: "80%" }}>
          <BarChart barChartData={userData} />
        </div>
        <div className="m-auto mt-5 p-5 row shadow-sm" style={{ width: "80%" }}>
          <div className="col-md-6">
            <DataTable />
          </div>

          <div className="col-md-6 h-100">
            <div className="shadow p-3 mb-4 rounded">
              <h4 style={{ color: "rgba(8, 155, 171, 0.85)" }}>
                Line chart Example
              </h4>
              <LineChart lineChartData={userData} />
            </div>
            <div className="mb-5 p-3 shadow rounded">
            <h4 style={{ color: "rgba(230, 65, 65, 0.85)" }}>
                Pie chart Example
              </h4>
              <div className="w-75 m-auto">
                <PieChart pieChartData={userData} />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
export default Dashboard;
