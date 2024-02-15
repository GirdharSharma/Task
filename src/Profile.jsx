const Profile = () => {
  return (
    <>
      <h2
        style={{
          backgroundColor: "#ffffff",
          height: "50px",
          paddingTop: "20px",
          marginLeft: "25px",
        }}
      >
        Account Settings
      </h2>
      <div
        style={{
          paddingLeft: "15px",
          paddingTop: "35px",
          height: "800px",
          width: "100%",
          backgroundColor: "#f7f8f9",
        }}
      >
        <div style={{ display: "flex", marginBottom: "30px" }}>
          <img
            src="./assets/model.png"
            alt=""
            style={{
              height: "76px",
              width: "76px",
              // position: "absolute",
              // zIndex: "-1",
            }}
          />

          <img
            src="./assets/Group585.svg"
            alt=""
            style={{
              height: "21px",
              width: "23px",
              position: "absolute",
              marginLeft: "56px",
              marginTop: "54px",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "30px",
            }}
          >
            <span
              style={{
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "8px",
              }}
            >
              Marry Doe
            </span>
            <span style={{ fontSize: "16px" }}>Marry@Gmail.Com</span>
          </div>
        </div>
        <p style={{ width: "40%", fontSize: "19px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          nulla, quidem perspiciatis culpa, placeat facere, sequi nobis fuga
          omnis officia quasi quod ratione.
        </p>
      </div>
    </>
  );
};
export default Profile;
