"use client";

import { useParams } from "react-router-dom";
import fakePeople from "../fakePeople";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react"; // Assuming User is the avatar icon from lucide-react

function UserProfile() {
  const { userId } = useParams();
  const userID = parseInt(userId as string);

  const user = fakePeople.find((person) => person.id === userID);

  if (!user) {
    return <div>User not found!</div>;
  }

  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "20px" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{
          backgroundColor: "#333",
          borderRadius: "50%",
          padding: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "70px",
          height: "70px",
          marginRight: "20px",
        }}>
          <User size={50} color="#EFCA47" /> {/* Use the size prop to adjust avatar size */}
        </div>
        <div style={{ fontSize: "36px", fontWeight: "bold", color: "#333" }}>
          {user.firstName} {user.lastName}
        </div>
      </div>

      <div style={{ fontSize: "20px", fontWeight: "bold", color: "#333", marginTop: "20px", display: "flex", alignItems: "center" }}>
        Interests:
        <div style={{ fontSize: "16px", color: "#555", marginLeft: "10px" }}>
          {user.interests.join(", ")}
        </div>
      </div>

      <div style={{ fontSize: "20px", fontWeight: "bold", color: "#333", marginTop: "20px", display: "flex", alignItems: "center" }}>
        Bio:
        <div style={{ fontSize: "16px", color: "#555", marginLeft: "10px" }}>
          {user.bio}
        </div>
      </div>

      <Button
        style={{
          backgroundColor: "#EFCA47",
          borderRadius: "5px",
          padding: "8px 16px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        Message
      </Button>
    </div>
  );
}

export default UserProfile;
