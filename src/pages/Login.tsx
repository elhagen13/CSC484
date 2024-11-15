import TopHeader from "@/components/TopHeader";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import fakePeople, { UserMetadata } from "@/fakePeople";
import React, { useContext } from "react";
import {UserContext} from "@/components/UserProvider";

function Login() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext)!; // Access UserContext to update the logged-in user
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleClick = () => {
    const user: UserMetadata | undefined = fakePeople.find(
      (person: { username: string; password: string }) =>
        person.username === username && person.password === password
    );

    if (user) {
      setUser(user);
      navigate("/home");
    } else {
      alert("Invalid username or password");
    }
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
        <div
          style={{
            fontWeight: "bolder",
            fontSize: "30px",
            width: "100%",
            textAlign: "left",
          }}
        >
          LOGIN
        </div>
        <form
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
          onSubmit={(e) => e.preventDefault()}
        >
          <label>username:</label>
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
          <label>password:</label>
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
          <a href="/create-account">new user?</a>
          <Button
            onClick={handleClick}
            style={{
              backgroundColor: "#EFCA47",
              borderRadius: "30px",
              boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.2)",
              width: "100px",
            }}
          >
            login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
