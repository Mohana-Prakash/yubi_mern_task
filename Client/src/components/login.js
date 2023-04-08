import React, { useRef } from "react";
import { toast } from "react-toastify";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apiService } from "../common/apiService";

function Login() {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const emailRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/;

  const validEmailHandler = (e) => {
    var valid;
    if (e.match(emailRegex)) {
      valid = e;
    }
    return valid;
  };

  const loginHandler = () => {
    let input = inputRef.current.value;
    if (input) {
      let alphabets = input.match(/[a-zA-Z]/g);
      let text = alphabets?.length > 0 ? validEmailHandler(input) : input;
      if (text) {
        // navigate("/otp");
        // apiService("post", "http://localhost:4000/auth/login", {
        //   user_info: text,
        // })
        axios
          .post("http://localhost:4000/auth/login", {
            user_info: text,
          })
          .then((e) => {
            if (e.data.status === 200) {
              navigate("/otp");
            } else {
              toast.warning(e.data.message);
            }
          })
          .catch((err) => console.log(err));
      } else {
        toast.warning("Invalid email / number");
      }
    } else toast.warning("Invalid email / number");
  };

  return (
    <div className="input_box">
      <h5>Get Started</h5>
      <div className="mt-3">
        <input
          className="input"
          type="text"
          placeholder="Moile / Email"
          ref={inputRef}
        />
      </div>
      <div className="mt-2 mb-4">
        <button className="btn-primary btn w-100 p-2" onClick={loginHandler}>
          Continue <ArrowRightAltIcon />
        </button>
      </div>
      <p className="text-secondary m-0">Or continue with</p>
      <div className="mt-3 d-flex justify-content-between">
        <button className="btn border p-2" style={{ width: "45%" }}>
          <WhatsAppIcon style={{ color: "green", fontSize: "20px" }} /> Whatsapp
        </button>
        <button className="btn border p-2" style={{ width: "45%" }}>
          <GoogleIcon style={{ fontSize: "20px" }} /> Google
        </button>
      </div>
      <p className="text-secondary mt-4">
        By continuing, you agree to our{" "}
        <span className="text-primary">terms</span> and{" "}
        <span className="text-primary">policies</span>.
      </p>
    </div>
  );
}

export default Login;
