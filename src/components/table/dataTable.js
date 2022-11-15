import React from "react";
import { chartData } from "../chart/Data";

function DataTable() {
  return (
    <div className="px-2 py-3 shadow rounded">
      <table className="table my-2">
        <thead className="thead-dark">
          <tr style={{ color: "white", backgroundColor: "#2daab8" }}>
            <th scope="col">#</th>
            <th scope="col">Year</th>
            <th scope="col">User Gain</th>
            <th scope="col">User Lost</th>
          </tr>
        </thead>
        <tbody>
          {chartData.map((data) => (
            <tr key={data.id} style={{ color: "#828bb2" }}>
              <td className="py-3">{data.id}</td>
              <td>{data.year}</td>
              <td>{data.userGain}</td>
              <td>{data.userLost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default DataTable;
