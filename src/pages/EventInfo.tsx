"use client";

import { useParams } from "react-router-dom"; 
import { Card } from "@/components/ui/card"; 
import {useNavigate } from "react-router-dom";
import { MapPin } from "lucide-react"; 
import fakeData from "../fakeData"; 
import fakePeople from "../fakePeople"; 
import { ScrollArea } from "@/components/ui/scroll-area"; 
import { Button } from "@/components/ui/button"; 
import { Link } from "react-router-dom"; // Import Link for routing

interface Event {
  id: number;
  eventName: string;
  location: string;
  date: string;
  time: string;
}

interface Attendee {
  firstName: string;
  lastName: string;
  interests: string[];
  bio: string;
  lastClicked: Date | null;
  avatar: JSX.Element;
  id: number; // Add id to Attendee interface
}

function EventInfoPage() {
  const navigate = useNavigate();
  const { eventId } = useParams();
  const eventID = parseInt(eventId as string);

  const event = fakeData.reduce((acc: Event[], category) => {
    category.type.forEach((type) => {
      acc.push(...type.events);
    });
    return acc;
  }, []).find((event) => event.id === eventID);

  if (!event) {
    return <div>Event not found!</div>;
  }

  const handleMessage = (id : Number) => {
    navigate(`/user/${id}/message`);
  }

  // Sort attendees first by lastClicked, then alphabetically by last name and first name
  const sortedAttendees = fakePeople
    .slice() 
    .sort((a, b) => {
      const lastClickedA = a.lastClicked ? a.lastClicked.getTime() : -Infinity;
      const lastClickedB = b.lastClicked ? b.lastClicked.getTime() : -Infinity;
      const lastClickedCompare = lastClickedB - lastClickedA;
      if (lastClickedCompare !== 0) return lastClickedCompare;

      const nameA = `${a.lastName.toLowerCase()} ${a.firstName.toLowerCase()}`;
      const nameB = `${b.lastName.toLowerCase()} ${b.firstName.toLowerCase()}`;
      return nameA.localeCompare(nameB);
    });

  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "0px", height: "100vh" }}>
      <h2 style={{ fontSize: "20px", fontWeight: "normal", textTransform: "uppercase", color: "#333", marginBottom: "5px" }}>Event Details</h2>

      <div style={{ fontSize: "30px", fontWeight: "bold", color: "#333", marginBottom: "0px" }}>{event.eventName}</div>

      <Card
        style={{
          backgroundColor: "#f8f8f8",
          padding: "20px",
          borderRadius: "10px",
          border: "1px solid #f8f8f8",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <div style={{ fontSize: "16px", color: "#333", marginBottom: "10px" }}>
            <strong>Time:</strong> {event.time}
          </div>
          <div style={{ fontSize: "16px", color: "#333" }}>
            <strong>Location:</strong> {event.location}
          </div>
        </div>

        {/* RSVP Button */}
        <Button
          style={{
            backgroundColor: "#EFCA47",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
            borderRadius: "5px",
            padding: "8px 16px",
          }}
        >
          RSVP
        </Button>
      </Card>

      <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "#333", marginTop: "20px", marginBottom: "10px" }}>Attendees</h3>

      <ScrollArea
        className="w-full"
        style={{
          flex: 1,
          height: "calc(50vh - 100px)",
          borderColor: "#D1D1D1",
          padding: "0px",
          borderRadius: "0",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {sortedAttendees.map((attendee, index) => (
            <Card
              key={index}
              style={{
                backgroundColor: "#e0e0e0",
                border: "1px solid #e0e0e0",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                display: "flex",
                alignItems: "center",
                minHeight: "120px",
              }}
            >
              {/* Avatar with dark grey circular background */}
              <div style={{
                marginRight: "15px",
                backgroundColor: "#333",
                borderRadius: "50%", 
                padding: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "50px",
                height: "50px",
              }}>
                <div style={{ width: "30px", height: "30px", color: "#EFCA47", marginTop: "5px", marginLeft: "3px"}}>
                  {attendee.avatar}
                </div>
              </div>

              {/* Attendee Name and Interests stacked vertically */}
              <div style={{ flex: 1 }}>
                <div style={{ color: "#333", fontWeight: "bold", marginBottom: "5px" }}>
                  {attendee.firstName} {attendee.lastName}
                </div>
                <div style={{ color: "#555", fontSize: "14px", marginBottom: "10px", marginRight: "5px" }}>
                  Interests: {attendee.interests.join(", ")}
                </div>
              </div>

              {/* Attendee Buttons - Stacked vertically on the right */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                {/* Profile Button with Link */}
                <Link to={`/user/${attendee.id}/profile`} style={{ textDecoration: "none" }}>
                  <Button
                    style={{
                      backgroundColor: "#EFCA47",
                      borderRadius: "5px",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                      padding: "5px 10px",
                      marginBottom: "5px",
                      width: "100px", // Ensure both buttons have the same width
                    }}
                  >
                    Profile
                  </Button>
                </Link>
                <Button
                  style={{
                    backgroundColor: "#EFCA47",
                    borderRadius: "5px",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                    padding: "5px 10px",
                    width: "100px", 
                  }}
                  onClick={() => {handleMessage(attendee.id)}}
                >
                  Message
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

export default EventInfoPage;
