import TopHeader from "@/components/TopHeader";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import React from "react";

function CreateAccount() {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleClick = () => {
    navigate("/create-account/profile-photo", { state: { username, password } });
  };

  return (
    <div>
      <TopHeader />
      <div
        style={{
          width: "100%",
          height: "100%",
          fontFamily: "Inter",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "30px",
          padding: "80px",
        }}
      >
        <text
          style={{
            fontWeight: "bolder",
            fontSize: "30px",
            color: "black",
            width: "100%",
            textAlign: "left",
          }}
        >
          CREATE <br /> ACCOUNT
        </text>
        <form
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <text>username:</text>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              backgroundColor: "#F3F3F3",
              height: "50px",
              borderRadius: "30px",
              paddingLeft: "25px",
            }}
          />
          <text>password:</text>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              backgroundColor: "#F3F3F3",
              height: "50px",
              borderRadius: "30px",
              paddingLeft: "25px",
            }}
          />
        </form>
        <div
          style={{
            width: "100%",
            alignItems: "flex-end",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Button
            onClick={handleClick}
            style={{
              backgroundColor: "#EFCA47",
              borderRadius: "30px",
              boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.2)",
              width: "100px",
            }}
          >
            create
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
