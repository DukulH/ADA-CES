import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";
import "./style.css";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SignIn } from "../actions";

function LoginPage() {
  let history = useHistory();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (JSON.parse(localStorage.getItem("registerUserData"))) {
      const existingData = JSON.parse(localStorage.getItem("registerUserData"));
      existingData.find((item) => {
        if (item.email === data.email) {
          if (item.password === data.password) {
            item.isLogged = true;
            item.type = "admin";
            localStorage.setItem("loggedInUserData", JSON.stringify(item));
            dispatch(SignIn());
            history.push("/");
          } else {
            toast("Password not match!");
          }
        } else {
          toast("Email not found!");
        }
      });
    } else {
      toast("No Account Found!!");
    }
  };

  return (
    <div className="mx-3">
      <h6 style={{ color: "gray" }}>Please Provide...</h6>
      <ToastContainer
        position="top-right"
        newestOnTop={false}
        theme="dark"
        autoClose={false}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          className="mt-3 mb-3"
          sx={{ display: "flex", alignItems: "flex-end" }}
        >
          <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            color="secondary"
            fullWidth
            variant="standard"
            label="Email"
            id="standard-basic"
            type="email"
            required
            {...register("email")}
          />
        </Box>
        <Box
          className="mt-3 mb-3"
          sx={{ display: "flex", alignItems: "flex-end" }}
        >
          <PasswordIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            color="secondary"
            fullWidth
            variant="standard"
            label="Password"
            id="standard-basic"
            required
            type="password"
            {...register("password")}
          />
        </Box>
        <p style={{ textAlign: "end" }}>
          <a className="forgotTextDesign" href="#">
            Forgot Password?
          </a>
        </p>
        <button className="btnDesign">Login</button>
      </form>
    </div>
  );
}
export default LoginPage;
