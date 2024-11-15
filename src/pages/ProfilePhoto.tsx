import React, { useState } from "react";
import {useLocation, useNavigate} from "react-router-dom";
import TopHeader from "@/components/TopHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import avatarMap from "@/avatarOptions";

function ProfilePhoto() {
  const navigate = useNavigate();
  const location = useLocation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);

  const handleContinue = () => {
    const { username, password } = location.state
    console.log(selectedAvatar)
    if (selectedAvatar) {
      navigate("/create-account/interests", {
        state: { username, password, firstName, lastName, bio, avatarKey: selectedAvatar },
      });
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        display: "inline-flex",
      }}
    >
      <TopHeader />
      <div
        style={{
          width: 330,
          height: 704,
          padding: 10,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 6,
          display: "flex",
        }}
      >
        <div
          style={{
            width: 167,
            height: 52,
            fontSize: 36,
            fontFamily: "Inter",
            fontWeight: "900",
            alignItems: "center",
            wordWrap: "break-word",
          }}
        >
          PROFILE
        </div>
        <form
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <text>First Name:</text>
          <Input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={{
              backgroundColor: "#F3F3F3",
              height: "50px",
              borderRadius: "30px",
              paddingLeft: "25px",
            }}
          />
          <text>Last Name:</text>
          <Input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            style={{
              backgroundColor: "#F3F3F3",
              height: "50px",
              borderRadius: "30px",
              paddingLeft: "25px",
            }}
          />
        </form>
        <text>Pick an Avatar:</text>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {Object.entries(avatarMap).map(([key, icon]) => (
            <div
              key={key}
              onClick={() => setSelectedAvatar(key)}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: selectedAvatar === key ? "#EFCA47" : "#F3F3F3",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              {icon}
            </div>
          ))}
        </div>
        <form
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <text>Bio:</text>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            style={{
              backgroundColor: "#F3F3F3",
              height: "100px",
              borderRadius: "15px",
              padding: "15px",
            }}
          />
        </form>
      </div>
      <div
        style={{
          width: "100%",
          height: 139,
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 10,
          paddingBottom: 10,
          background: "#FFFAEA",
          borderRadius: 20,
          overflow: "hidden",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 10,
          display: "inline-flex",
        }}
      >
        <div style={{ width: 144, height: "50%", position: "relative" }}>
          <Button
            style={{
              backgroundColor: "#EFCA47",
              borderRadius: "30px",
              boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.2)",
            }}
            onClick={handleContinue}
            disabled={!firstName || !lastName || !bio || !selectedAvatar}
          >
            continue →
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePhoto;
