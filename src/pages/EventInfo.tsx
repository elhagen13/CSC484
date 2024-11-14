"use client";

import { useParams } from "react-router-dom"; // For capturing the dynamic event ID from the URL
import { Card } from "@/components/ui/card"; // Assuming shadcn UI provides a 'Card' component
import { MapPin } from "lucide-react"; // For the location pin icon
import fakeData from "../fakeData"; // Import the fake event data
import fakePeople from "../fakePeople"; // Import the fake people data
import { ScrollArea } from "@/components/ui/scroll-area"; // For the scrollable attendees section

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
    <div style={{ padding: "20px" }}>
      {/* Event Details Heading */}
      <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>Event Details</h2>

      {/* Event Information */}
      <div style={{ fontSize: "16px", color: "#A0A0A0", marginBottom: "10px" }}>
        {event.eventName}
      </div>
      <div style={{ fontSize: "16px", color: "#A0A0A0", marginBottom: "10px" }}>
        {event.date} @ {event.time}
      </div>
      <div style={{ display: "inline-flex", alignItems: "center", color: "#7D7D7D", fontSize: "14px" }}>
        <MapPin color="#B2B2B2" height="14px" style={{ marginRight: "5px" }} />
        <div>{event.location}</div>
      </div>

      {/* Scrollable Attendees Section */}
      <h3 style={{ marginTop: "30px", fontSize: "20px", fontWeight: "bold" }}>Attendees</h3>
      <ScrollArea
        className="w-full"
        style={{
          height: "calc(50vh - 100px)", // Adjust based on available space
          borderColor: "#D1D1D1",
          padding: "10px",
          borderRadius: "0",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {attendees.map((attendee, index) => (
            <Card
              key={index}
              style={{
                padding: "15px",
                border: "1px solid #D1D1D1",
                borderRadius: "10px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div style={{ fontWeight: "bold" }}>
                {attendee.firstName} {attendee.lastName}
              </div>
              <div style={{ fontSize: "14px", color: "#7D7D7D" }}>
                Interests: {attendee.interests.join(", ")}
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

export default EventInfoPage;
