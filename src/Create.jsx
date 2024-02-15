import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const Navigate = useNavigate();
  const submitClick = () => {
    Navigate("/profile");
  };
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
          <h1 style={{ marginBottom: "35px" }}>Create your PopX Account</h1>

          <form action="">
            {/* Name input */}
            <div className="input-group">
              <input
                type="text"
                className="input"
                placeholder="Enter your name"
                required
              />
              <label className="placeholder">&nbsp;Full Name &nbsp;</label>
            </div>
            {/* Name input */}
            <div className="input-group">
              <input
                type="number"
                className="input"
                placeholder="Enter Contact No."
                required
              />
              <label className="placeholder">&nbsp;Phone Number &nbsp;</label>
            </div>
            {/* Name input */}
            <div className="input-group">
              <input
                type="email"
                className="input"
                required
                placeholder="Enter email address"
              />
              <label className="placeholder">&nbsp;Email Address &nbsp;</label>
            </div>
            {/* Password input */}
            <div className="input-group">
              <input
                type="password"
                className="input"
                placeholder="Enter Password"
                required
              />
              <label className="placeholder">&nbsp;Password &nbsp;</label>
            </div>
            {/* Company name input */}
            <div className="input-group">
              <input
                type="text"
                className="input"
                placeholder="Enter Comapany Name"
              />
              <label className="placeholder">&nbsp;Company Name &nbsp;</label>
            </div>
            {/* Radio button */}
            <FormControl>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                required
                style={{ color: "black" }}
              >
                Are you an agency?
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                defaultValue="female"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Yes"
                />
                <FormControlLabel value="male" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
            {/* buttons */}
            <button
              type="submit"
              onClick={submitClick}
              style={{
                width: "100%",
                backgroundColor: "#6C25FF",
                cursor: "pointer",
                color: "#FFFFFF",
                height: "46px",
                border: "0px",
                borderRadius: "6px",
                fontSize: "16px",
                marginTop: "50px",
              }}
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Create;
