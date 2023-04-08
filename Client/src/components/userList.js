import React, { useEffect, useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UserList() {
  const navigate = useNavigate();
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/user/userList")
      .then((e) => {
        setUserList(e.data.response);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="input_box">
      <h5>User's List</h5>
      <div className="mt-3" style={{ height: "40vh", overflowY: "scroll" }}>
        {userList?.length == 0 ? (
          <p className="text-center mt-3">No user found</p>
        ) : (
          userList?.map((e, i) => {
            return (
              <p className="text-center border p-3" key={i}>
                {e?.user_info}
              </p>
            );
          })
        )}
      </div>
      <div className="mt-2 d-flex justify-content-end">
        <button className="btn text-primary  p-2" onClick={() => navigate(-1)}>
          Go Back <KeyboardBackspaceIcon />
        </button>
      </div>
    </div>
  );
}

export default UserList;
