"use client";

import { useParams } from "react-router-dom"; // For capturing the dynamic event ID from the URL
import { Card } from "@/components/ui/card"; // Assuming shadcn UI provides a 'Card' component
import { MapPin } from "lucide-react"; // For the location pin icon
import fakeData from "../fakeData"; // Import the fake event data
import fakePeople from "../fakePeople"; // Import the fake people data
import { ScrollArea } from "@/components/ui/scroll-area"; // For the scrollable attendees section
import { Button } from "@/components/ui/button"; // For the RSVP and attendee buttons

// Define the structure of an event
interface Event {
  id: number;
  eventName: string;
  location: string;
  date: string;
  time: string;
}

// Define the structure of an attendee
interface Attendee {
  firstName: string;
  lastName: string;
  interests: string[];
}

function EventInfoPage() {
  const { eventId } = useParams(); // Get event ID from URL
  const eventID = parseInt(eventId as string); // Parse the eventId to integer
  
  // Find the event from the fake data using the eventId
  const event = fakeData.reduce((acc: Event[], category) => {
    category.type.forEach((type) => {
      acc.push(...type.events); // Push all events from each category's type
    });
    return acc;
  }, []).find((event) => event.id === eventID);

  if (!event) {
    return <div>Event not found!</div>; // In case the event doesn't exist
  }

  // Sample attendees (from fakePeople.js)
  const attendees = fakePeople.slice(0, 10); // Just pulling the first 10 attendees for this example

  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "0px", height: "100vh" }}>
      {/* Event Details Heading */}
      <h2 style={{ fontSize: "20px", fontWeight: "normal", textTransform: "uppercase", color: "#333", marginBottom: "5px" }}>Event Details</h2>

      {/* Event Name */}
      <div style={{ fontSize: "30px", fontWeight: "bold", color: "#333", marginBottom: "0px" }}>{event.eventName}</div>

      {/* Event Time and Location Card */}
      <Card
        style={{
          backgroundColor: "#f8f8f8",
          padding: "20px",
          borderRadius: "10px",
          border: "1px solid #f8f8f8", // Border and background are the same color, so no visible border
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
            borderRadius: "5px",
            padding: "8px 16px",
          }}
        >
          RSVP
        </Button>
      </Card>

      {/* Scrollable Attendees Section */}
      <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "#333", marginTop: "20px", marginBottom: "10px"}}>Attendees</h3>
      <ScrollArea
        className="w-full"
        style={{
          flex: 1, // Make the scrollable area fill the remaining space
          height: "calc(50vh - 100px)", // Adjust the height to not overlap with the bottom navigation
          borderColor: "#D1D1D1",
          padding: "0px",
          borderRadius: "0",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {attendees.map((attendee, index) => (
            <Card
              key={index}
              style={{
                backgroundColor: "#e0e0e0", // Slightly darker grey background for the attendee card
                border: "1px solid #e0e0e0", // Same border color as background
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                minHeight: "120px", // Ensures cards are tall enough to accommodate the buttons
              }}>
              <div>
              <div style={{ color: "#333", fontWeight: "bold", marginBottom: "5px" }}>
                {attendee.firstName} {attendee.lastName}
              </div>
              <div style={{ color: "#555", fontSize: "14px", marginBottom: "10px" }}>
                Interests: {attendee.interests.join(", ")}
              </div>
              </div>

              {/* Attendee Buttons - Stacked vertically on the right */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Button
                  style={{
                    backgroundColor: "#EFCA47", // Same as RSVP button color
                    borderRadius: "5px",
                    padding: "5px 10px",
                    marginBottom: "5px",
                    width: "100px", // Ensure both buttons have the same width
                  }}
                >
                  Profile
                </Button>
                <Button
                  style={{
                    backgroundColor: "#EFCA47", // Same as RSVP button color
                    borderRadius: "5px",
                    padding: "5px 10px",
                    width: "100px", // Ensure both buttons have the same width
                  }}
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
