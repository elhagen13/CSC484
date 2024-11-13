"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import * as React from "react";

function SearchPage() {
  const [query, setQuery] = React.useState("");
  const [events, setEvents] = React.useState([
    { id: 1, name: "Hiking Adventure", location: "Mountain Trail" },
    { id: 2, name: "Art Class", location: "Downtown Gallery" },
    { id: 3, name: "Yoga Retreat", location: "Sunset Park" },
    { id: 4, name: "Cooking Class", location: "Chef's Kitchen" },
    { id: 5, name: "Music Festival", location: "Central Park" },
    { id: 6, name: "Dance Workshop", location: "City Dance Studio" },
    { id: 7, name: "Photography Walk", location: "Old Town" },
    { id: 8, name: "Coding Bootcamp", location: "Tech Hub" },
    { id: 9, name: "Film Screening", location: "Downtown Cinema" },
    // Add more events if necessary...
  ]);

  // Explicitly typing the event as a ChangeEvent for an HTML input element
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ width: '100%', padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '80px' }}>
      {/* Search Bar */}
      <Input
        value={query}
        onChange={handleSearch}
        placeholder="Search events by name"
        style={{ width: '100%', padding: '10px', borderRadius: '8px' }}
      />

      {/* Scrollable Events */}
      <ScrollArea
        className="w-full"
        style={{
          height: 'calc(100vh - 150px - 60px)', // Adjust based on header and bottom navigation bar height
          borderColor: '#D1D1D1',
          padding: '20px',
          borderRadius: '0', // Ensure no border radius to avoid clipping the card corners
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {filteredEvents.map((event) => (
            <div key={event.id} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', border: '1px solid #D1D1D1', padding: '20px', borderRadius: '10px' }}>
              {/* Event Details */}
              <div style={{ textAlign: 'left', flex: 1 }}>
                <div style={{ fontWeight: 'bold', fontSize: '18px' }}>{event.name}</div>
                <div style={{ color: '#7D7D7D', fontSize: '14px' }}>{event.location}</div>
              </div>

              {/* RSVP Button */}
              <Button style={{ backgroundColor: '#EFCA47', borderRadius: '5px', padding: '8px 16px' }}>RSVP</Button>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

export default SearchPage;
