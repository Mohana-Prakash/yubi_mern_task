import React, { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDebouncedEffect } from "../common/debounce";

function OTP() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  // useDebouncedEffect(
  //   () => {
  //     if (otp.length == 4 && otp === "9999") {
  //       navigate("/userList");
  //     } else {
  //       toast.warning("invalid");
  //     }
  //   },
  //   1000,
  //   [otp]
  // );

  const otpHandler = (e) => {
    e.preventDefault();
    let otp = e.target.value;
    if (otp.length == 4) {
      if (otp === "9999") {
        navigate("/userList");
      } else {
        toast.warning("Invalid OTP");
      }
    }
  };

  return (
    <div className="input_box">
      <h5>Enter OTP</h5>
      <p className="text-secondary m-0">
        We have sent a one time password (OTP) to ******2443.
      </p>
      <div className="mt-3">
        <input
          className="input"
          name="otp"
          // value=""
          type="text"
          placeholder="OTP"
          // onChange={(e) => setOtp(e.target.value)}
          onChange={otpHandler}
        />
      </div>
      <p className="text-secondary mt-3">Resent OTP in 00.15</p>
      <div className="mt-2 d-flex justify-content-end">
        <button className="btn text-primary  p-2" onClick={() => navigate(-1)}>
          Go Back <KeyboardBackspaceIcon />
        </button>
      </div>
    </div>
  );
}

export default OTP;
