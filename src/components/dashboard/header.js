import React from "react";
import Badge from "@mui/material/Badge";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { cyan } from "@mui/material/colors";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Header() {
  const name = useSelector((state) => state.isLogged.name);
  const history = useHistory();
  const handleSearch = (e) => {
    console.log(e.target.value);
  };
  const handleLogOut = () => {
    localStorage.removeItem("loggedInUserData");
    history.push('/login')
  };
  return (
    <div
      style={{ marginLeft: "240px", height: "100px" }}
      className="shadow-sm row rounded "
    >
      <div className="col-md-6">
        <input
          className="searchField"
          type="text"
          value="Search here..."
          name="Search..."
          onChange={handleSearch}
        />
      </div>
      <div className="col-md-6 h-100 d-flex justify-content-end align-items-center">
        <Badge badgeContent={4} className="me-4" color="secondary">
          <NotificationsNoneOutlinedIcon
            sx={{ width: 35, height: 35 }}
            color="action"
          />
        </Badge>
        <Badge badgeContent={4} color="info">
          <MailOutlinedIcon sx={{ width: 35, height: 35 }} color="action" />
        </Badge>
        <Avatar
          className=" ms-5 me-2"
          sx={{ width: 56, height: 56, bgcolor: cyan[500] }}
        >
          <AccountCircleIcon />
        </Avatar>
        <button
          className="me-5 profileBtnDesign"
          onClick={handleLogOut}
          style={{ color: "rgb(73, 17, 43" }}
        >
          {name}
        </button>
      </div>
    </div>
  );
}
