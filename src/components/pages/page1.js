import React from "react";
import Header from "../dashboard/header";
import SideBar from "../sidebar/SideBar";

function Page1() {
  return (
    <>
      <SideBar />
      <Header />
      <div style={{ marginLeft: "240px" }}>
      <h1 className="text-center" style={{color:"rgba(230, 65, 65, 0.85)"}}>Page 1 coming soon ...</h1>
      </div>
    </>
  );
}
export default Page1;
