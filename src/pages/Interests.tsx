import { useNavigate, useLocation } from "react-router-dom";
import React, { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import avatarMap from "@/avatarOptions";
import fakeData from "@/fakeData";
import { ScrollArea } from "@/components/ui/scroll-area";
import TopHeader from "@/components/TopHeader";
import { UserContext } from "@/components/UserProvider";
import { User } from "lucide-react";

const interestOptions: string[] = [];

// generate interests based on the event names in fakeData
fakeData.forEach((category) => {
  category.type.forEach((type) => {
    interestOptions.push(type.eventName);
  });
});

function Interests() {
  const navigate = useNavigate();
  const location = useLocation();
  const { setUser } = useContext(UserContext)!; // Access UserContext to update the logged-in user
  const { username, password, firstName, lastName, avatarKey, bio } =
    location.state;
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  console.log("in locationstate: ", avatarMap[avatarKey]);
  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = () => {
    const selectedAvatar = avatarMap[avatarKey] || <User />;
    console.log(selectedAvatar.key);
    const newUser = {
      username,
      password,
      id: 99,
      firstName,
      lastName,
      bio,
      lastClicked: new Date(),
      interests: selectedInterests,
      avatar: selectedAvatar,
    };

    setUser(newUser);
    console.log("New user created:", newUser);
    navigate("/home");
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
      <TopHeader></TopHeader>
      <div
        style={{
          width: 330,
          height: 704,
          padding: 10,
          marginTop: "-40px",
          borderRadius: 1,
          overflow: "hidden",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 10,
          display: "flex",
        }}
      >
        <div
          style={{
            width: 281,
            height: 40,
            color: "black",
            fontSize: 36,
            marginTop: "0px",
            fontFamily: "Inter",
            fontWeight: "900",
            wordWrap: "break-word",
          }}
        >
          INTERESTS
        </div>
        <div
          style={{
            width: 306,
            height: 46,
            color: "#B2B2B2",
            fontSize: 16,
            fontFamily: "Inter",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          Help us get to know you! <br />
          Pick 3-5 of your personal interests.
        </div>
        <ScrollArea
          className="h-72 w-80 rounded-md border"
          style={{ borderColor: "#D1D1D1", scrollbarWidth: "thin" }}
        >
          <div className="p-3">
            {interestOptions.map((interest, index) => (
              <div key={index} className="items-top flex space-x-2">
                <Checkbox
                  id={`interest-${index}`}
                  onClick={() => toggleInterest(interest)}
                />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor={`interest-${index}`}
                    className="text-sm font-medium leading-none"
                  >
                    {interest}
                  </label>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
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
            onClick={handleSubmit}
          >
            Continue →
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Interests;
