import { useNavigate } from "react-router-dom";
import "./Home.css";
const Home = () => {
  const Navigate = useNavigate();
  const createClick = () => {
    Navigate("/newuser");
  };
  const loginClick = () => {
    Navigate("/SignIn");
    // console.log("hello");
  };
  return (
    <>
      <div className="big-container">
        <div className="container">
          <div className="upper">
            <h2 className="head">Welcome to PopX</h2>
            <p className="para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <button className="create-btn" onClick={createClick}>
            Create Account
          </button>
          <button className="login-btn" onClick={loginClick}>
            Already Registered? Login
          </button>
        </div>
      </div>
    </>
  );
};
export default Home;
