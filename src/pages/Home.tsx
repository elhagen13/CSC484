import data from "../fakeData";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/components/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

function Home({ interests }: { interests: string[] }) {
  const navigate = useNavigate();
  const { toast } = useToast();
  const handleClick = (id: number) => {
    navigate(`/event/${id}/confirmation`);
  };
  const allEvents = data.flatMap((category) =>
    category.type.flatMap((type) =>
      type.events.filter(
        (event) => interests.length === 0 || interests.includes(event.eventName)
      )
    )
  );
  const shuffledEvents = allEvents.sort(() => 0.5 - Math.random());
  const randomEvents = shuffledEvents.slice(0, 8);

  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        padding: "50px 40px 50px 40px",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        display: "inline-flex",
      }}
    >
      <p
        style={{
          fontFamily: "Inter",
          fontWeight: "bold",
          fontSize: "30px",
          width: "100%",
          color: "black",
          textAlign: "left",
        }}
      >
        UPCOMING
      </p>
      <p
        style={{
          fontFamily: "Inter",
          fontSize: "13px",
          width: "100%",
          color: "#B2B2B2",
          textAlign: "left",
          marginBottom: "40px",
        }}
      >
        Events near you!
      </p>
      <p
        style={{
          fontFamily: "inter",
          fontWeight: "bolder",
          fontSize: "20px",
          width: "100%",
          color: "black",
          textAlign: "left",
        }}
      >
        Recommended
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "40px",
          width: "100%",
          transform: "translate(-12px, 0%)",
          overflowX: "scroll",
          padding: "10px",
        }}
      >
        {randomEvents.map((event) => {
          return (
            <Link
              key={event.id}
              to={`/event/${event.id}`}
              style={{ textDecoration: "none" }}
            >
              <div
                className="event-card"
                style={{
                  position: "relative",
                  width: "225px",
                  height: "225px",
                  backgroundColor: "white",
                  flexShrink: 0,
                  boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.2)",
                  borderRadius: "20px",
                  alignContent: "center",
                  padding: "0px 30px 0px 30px",
                }}
              >
                <p
                  style={{
                    fontFamily: "inter",
                    fontSize: "12px",
                    width: "100%",
                    color: "#B2B2B2",
                  }}
                >
                  {event.date}, {event.time}
                </p>
                <p
                  style={{
                    fontFamily: "inter",
                    fontWeight: "bolder",
                    fontSize: "15px",
                    width: "100%",
                    color: "black",
                  }}
                >
                  {event.eventName}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    transform: "translate(-6px, 0px)",
                  }}
                >
                  <MapPin color="#B2B2B2" height="14px" />
                  <p
                    style={{
                      fontFamily: "inter",
                      fontSize: "12px",
                      width: "100%",
                      color: "#B2B2B2",
                    }}
                  >
                    {event.location}
                  </p>
                </div>
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
                    position: "absolute",
                    right: "30px",
                    bottom: "30px",
                    padding: "0px 20px 0px 20px",
                    height: "auto",
                    boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "10px",
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    RSVP
                  </p>
                </Button>
              </div>
              {/* Hover effect */}
              <style>{`
                .event-card:hover {
                  background-color: #f0f0f0;
                  cursor: pointer;
                  transform: scale(1.02); /* Reduced scaling */
                  color: #333; /* Change text color on hover */
                }
                .event-card:hover div {
                  color: #333; /* Ensure text color changes */
                }
              `}</style>
            </Link>
          );
        })}
      </div>
      {data.map((category) => {
        return (
          <div style={{ width: "100%" }}>
            {category.type.map((eventType) => {
              return (
                <div style={{ marginTop: "50px" }}>
                  <p
                    style={{
                      fontFamily: "inter",
                      fontWeight: "bolder",
                      fontSize: "20px",
                      width: "100%",
                      color: "black",
                      textAlign: "left",
                    }}
                  >
                    {eventType.eventName}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "40px",
                      width: "100%",
                      transform: "translate(-12px, 0%)",
                      overflowX: "scroll",
                      padding: "10px",
                    }}
                  >
                    {eventType.events.map((event, index) => (
                      <Link
                        key={event.id}
                        to={`/event/${event.id}`} // Link to event details
                        style={{ textDecoration: "none" }}
                      >
                        <div
                          className="event-card"
                          key={index}
                          style={{
                            position: "relative",
                            width: "225px",
                            height: "225px",
                            backgroundColor: "white",
                            flexShrink: 0,
                            boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.2)",
                            borderRadius: "20px",
                            alignContent: "center",
                            padding: "0px 30px",
                          }}
                        >
                          <p
                            style={{
                              fontFamily: "inter",
                              fontSize: "12px",
                              width: "100%",
                              color: "#B2B2B2",
                            }}
                          >
                            {event.date}, {event.time}
                          </p>
                          <p
                            style={{
                              fontFamily: "inter",
                              fontWeight: "bolder",
                              fontSize: "15px",
                              width: "100%",
                              color: "black",
                            }}
                          >
                            {event.eventName}
                          </p>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              transform: "translate(-6px, 0px)",
                            }}
                          >
                            <MapPin color="#B2B2B2" height="14px" />
                            <p
                              style={{
                                fontFamily: "inter",
                                fontSize: "12px",
                                width: "100%",
                                color: "#B2B2B2",
                              }}
                            >
                              {event.location}
                            </p>
                          </div>
                          <Button
                            onClick={() => {
                              toast({
                                title: "Success!",
                                description: `You RSVP-ed for ${event.eventName}`,
                                action: (
                                  <ToastAction altText="you did it">
                                    Undo
                                  </ToastAction>
                                ),
                              });
                            }}
                            style={{
                              position: "absolute",
                              right: "30px",
                              bottom: "30px",
                              padding: "0px 20px",
                              height: "auto",
                              boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.3)",
                            }}
                          >
                            <p
                              style={{
                                fontSize: "10px",
                                fontWeight: "bold",
                                color: "white",
                              }}
                            >
                              RSVP
                            </p>
                          </Button>
                        </div>
                        {/* Hover effect */}
                        <style>{`
                            .event-card:hover {
                            background-color: #f0f0f0;
                            cursor: pointer;
                            transform: scale(1.02); /* Reduced scaling */
                            color: #333; /* Change text color on hover */
                            }
                            .event-card:hover div {
                            color: #333; /* Ensure text color changes */
                            }
                        `}</style>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
export default Home;
export {};
