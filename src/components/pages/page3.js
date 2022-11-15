import React from "react";
import Header from "../dashboard/header";
import SideBar from "../sidebar/SideBar";

function Page3() {
  return (
    <>
      <SideBar />
      <Header />
      <div style={{ marginLeft: "240px" }}>
        <h1
          className="text-center"
          style={{ color: "rgba(252, 159, 91, 0.85)" }}
        >
          Page 3 coming soon...
        </h1>
      </div>
    </>
  );
}
export default Page3;
