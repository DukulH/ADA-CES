import React from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import HomeIcon from "@mui/icons-material/Home";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { useHistory } from "react-router-dom";
function SideBar() {
  const history = useHistory();
  return (
    <div>
      <SideNav
        expanded
        onToggle
        style={{ backgroundColor: "rgb(73, 17, 43", position:'fixed'}}
        onSelect={(selected) => {
          history.push("/" + selected);
        }}
      >
        <h1 className="my-3 ms-2 text-light">Role Based</h1>
        <SideNav.Nav>
          <NavItem eventKey="dashboard">
            <NavIcon>
              <HomeIcon sx={{ color: "action.active", mb: 0.5 }} />
            </NavIcon>
            <NavText>Dashboard</NavText>
          </NavItem>
          <NavItem eventKey="page1">
            <NavIcon>
              <InsertDriveFileIcon sx={{ color: "action.active", mb: 0.5 }} />
            </NavIcon>
            <NavText>Page-1</NavText>
          </NavItem>
          <NavItem eventKey="page2">
            <NavIcon>
              <InsertDriveFileIcon sx={{ color: "action.active", mb: 0.5 }} />
            </NavIcon>
            <NavText>Page-2</NavText>
          </NavItem>
          <NavItem eventKey="page3">
            <NavIcon>
              <InsertDriveFileIcon sx={{ color: "action.active", mb: 0.5 }} />
            </NavIcon>
            <NavText>Page-3</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </div>
  );
}
export default SideBar;
