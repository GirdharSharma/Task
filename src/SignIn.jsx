import React from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const Navigate = useNavigate();
  const submitClick = () => {
    Navigate("/profile");
  };
  const formRef = React.useRef();
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ width: "51%" }}>
            <h1 style={{ margin: "0px" }}>SignIn to your PopX account</h1>
            <p
              style={{
                marginTop: "12px",
                marginBottom: "25px",
                fontSize: "18px",
                color: "#919191",
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </p>
          </div>
          <form>
            <div className="input-group">
              <input
                type="email"
                className="input"
                placeholder="Enter email address"
                required
              />
              <label className="placeholder">&nbsp;Email address &nbsp;</label>
            </div>
            <div className="input-group">
              <input
                type="password"
                className="input"
                placeholder="Enter Password"
                required
              />
              <label className="placeholder">&nbsp;Password &nbsp;</label>
            </div>
            <button
              type="submit"
              onClick={submitClick}
              style={{
                width: "100%",
                backgroundColor: "#919191",
                cursor: "pointer",
                color: "#FFFFFF",
                height: "46px",
                border: "0px",
                borderRadius: "6px",
                fontSize: "16px",
                fontWeight: "600",
                marginTop: "20px",
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignIn;
