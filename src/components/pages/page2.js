import React from "react";
import Header from "../dashboard/header";
import SideBar from "../sidebar/SideBar";

function Page2() {
  return (
    <>
      <SideBar />
      <Header />
      <div style={{ marginLeft: "240px" }}>
        <h1
          className="text-center"
          style={{ color: "rgba(8, 155, 171, 0.85)" }}
        >
          Page 2 coming soon ...
        </h1>
      </div>
    </>
  );
}
export default Page2;
