import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Login from "./components/login";
import OTP from "./components/otp";
import UserList from "./components/userList";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/otp" element={<OTP />} />
        <Route exact path="/userList" element={<UserList />} />
      </Routes>
    </Router>
  );
};

export default Routers;
