import React from "react";
import { ReactComponent as Logo } from "@/assets/images/icon.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        left: 0,
        width: "500px",
        height: "65px",
        backgroundColor: "#FFF5D0",
        display: "flex",
        alignItems: "center",
        zIndex: "4",
      }}
    >
      <Logo
        onClick={() => {
          navigate("/home");
        }}
        width={65}
        height={65}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default Header;
