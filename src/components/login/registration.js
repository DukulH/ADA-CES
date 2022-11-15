import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";
import { useForm } from "react-hook-form";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { ToastContainer, toast } from "react-toastify";
import "./style.css";
import { useDispatch } from "react-redux";
import { toggleLoginPageActive } from "../actions/index";
import CloseIcon from "@mui/icons-material/Close";

function RegisterPage() {
  const dispatch = useDispatch();
  const [emailExist, setEmailExist] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    resetField,
  } = useForm();

  const onSubmit = (data) => {
    if (JSON.parse(localStorage.getItem("registerUserData"))) {
      const existingData = JSON.parse(localStorage.getItem("registerUserData"));
      if (existingData.find((item) => item.email === data.email)) {
        toast("Email already exist!");
        setEmailExist(true);

      } else {
        const newArray = [...existingData, data];
        localStorage.setItem("registerUserData", JSON.stringify(newArray));
        resetField("name");
        resetField("email");
        resetField("password");
        resetField("confirm_password");
        setEmailExist(false)
        toast("Registration Successful!");
      }
    } else {
      const newData = [];
      newData.push(data);
      localStorage.setItem("registerUserData", JSON.stringify(newData));
      resetField("name");
      resetField("email");
      resetField("password");
      resetField("confirm_password");
      toast("Registration Successful!");
    }
  };

  const CloseButton = () => (
    <CloseIcon
      onClick={() => dispatch(toggleLoginPageActive())}
      sx={{ mr: 1, mt: 1.5 }}
    />
  );

  return (
    <div className="mx-3">
      {emailExist ? (
        <ToastContainer
          position="top-right"
          newestOnTop={false}
          theme="dark"
          autoClose={false}
        />
      ) : (
        <ToastContainer
          position="top-right"
          newestOnTop={false}
          theme="dark"
          autoClose={false}
          closeButton={CloseButton}
        />
      )}
      <h6 style={{ color: "gray" }}>We will need...</h6>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          className="mt-3 mb-3"
          sx={{ display: "flex", alignItems: "flex-end" }}
        >
          <AccountBoxIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            color="secondary"
            fullWidth
            variant="standard"
            label="Name"
            id="standard-basic"
            required
            {...register("name")}
          />
        </Box>
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
            type="email"
            id="standard-basic"
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
            type="password"
            required
            {...register("password", {
              validate: (val) => {
                if (watch("password").length < 8) {
                  return "Password must be 8 characters";
                }
              },
            })}
          />
        </Box>
        <small style={{ color: "red" }}>{errors?.password?.message}</small>
        <Box
          className="mt-3 mb-3"
          sx={{ display: "flex", alignItems: "flex-end" }}
        >
          <PasswordIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            color="secondary"
            fullWidth
            variant="standard"
            label="Confirm Password"
            id="standard-basic"
            type="password"
            required
            {...register("confirm_password", {
              validate: (val) => {
                if (watch("password") !== val) {
                  return "Passwords do no match!";
                }
              },
            })}
          />
        </Box>
        <small style={{ color: "red" }}>
          {errors?.confirm_password?.message}
        </small>{" "}
        <br />
        <button className="btnDesign">Sign up</button>
      </form>
    </div>
  );
}
export default RegisterPage;
