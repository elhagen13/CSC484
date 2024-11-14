"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import * as React from "react";
import fakeData from "../fakeData";
import { useToast } from "@/components/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

// Define the structure of an event
interface Event {
  id: number;
  eventName: string;
  location: string;
  date: string;
  time: string;
}

function SearchPage() {
  const [query, setQuery] = React.useState("");
  const { toast } = useToast();
  // Flatten the event data from fakeData for easier use
  const allEvents: Event[] = fakeData.reduce((acc: Event[], category) => {
    category.type.forEach((type) => {
      acc.push(...type.events); // Push all events from each category's type
    });
    return acc;
  }, []);

  const [events, setEvents] = React.useState<Event[]>(allEvents);

  // Handle search input
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const filteredEvents = events.filter((event) =>
    event.eventName.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      style={{
        width: "100%",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        marginTop: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: 40,
          color: "black",
          fontSize: 30,
          fontFamily: "Inter",
          fontWeight: "900",
          wordWrap: "break-word",
        }}
      >
        Find An Event Near You!
      </div>
      {/* Search Bar */}
      <Input
        value={query}
        onChange={handleSearch}
        placeholder="Search events by name"
        style={{ width: "100%", padding: "10px", borderRadius: "8px", color: "light grey"}}
      />

      {/* Scrollable Events */}
      <ScrollArea
        className="w-full"
        style={{
          height: "calc(100vh - 150px - 60px)", // Adjust based on header and bottom navigation bar height
          borderColor: "#D1D1D1",
          padding: "20px",
          borderRadius: "0", // Ensure no border radius to avoid clipping the card corners
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                border: "1px solid #D1D1D1",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              {/* Event Details */}
              <div style={{ textAlign: "left", flex: 1 }}>
                {/* Smaller subheading for Date and Time */}
                <div
                  style={{
                    fontSize: "12px",
                    color: "#A0A0A0",
                    marginBottom: "1px",
                  }}
                >
                  {event.date} @ {event.time}
                </div>

                {/* Event Title */}
                <div style={{ fontWeight: "bold", fontSize: "18px" }}>
                  {event.eventName}
                </div>

                {/* Location with MapPin icon */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    color: "#7D7D7D",
                    fontSize: "14px",
                  }}
                >
                  <MapPin
                    color="#B2B2B2"
                    height="14px"
                    style={{ marginRight: "0px" }}
                  />
                  <div>{event.location}</div>
                </div>
              </div>

              {/* RSVP Button */}
              <Button
                onClick={() => {
                  toast({
                    title: "Success!",
                    description: `You RSVP-ed for ${event.eventName}`,
                    action: (
                      <ToastAction altText="you did it">Undo</ToastAction>
                    ),
                  });
                }}
                style={{
                  backgroundColor: "#EFCA47",
                  borderRadius: "5px",
                  padding: "8px 16px",
                }}
              >
                RSVP
              </Button>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

export default SearchPage;
