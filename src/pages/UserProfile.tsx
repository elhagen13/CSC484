"use client";

import { useParams } from "react-router-dom"; // To capture dynamic userId
import fakePeople from "../fakePeople"; // Import the fake people data

function UserProfile() {
  const { userId } = useParams(); // Get the dynamic userId from the URL
  const userID = parseInt(userId as string); // Convert the userId to an integer

  // Find the user based on the userId
  const user = fakePeople.find((person) => person.id === userID);

  if (!user) {
    return <div>User not found!</div>; // If user is not found, display a message
  }

  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "20px" }}>
      <h1 style={{ fontSize: "30px", fontWeight: "bold", color: "#333" }}>{user.firstName} {user.lastName}</h1>

      <h3 style={{ fontSize: "20px", color: "#333" }}>Interests</h3>
      <ul style={{ fontSize: "16px", color: "#555" }}>
        {user.interests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserProfile;
