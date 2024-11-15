import { Button } from "@/components/ui/button";
import { UserContext } from "@/components/UserProvider";
import { useContext, useState } from "react";
import { ReactComponent as Edit } from "@/assets/images/edit.svg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import fakeData from "@/fakeData";

const interestOptions: string[] = [];

// generate interests based on the event names in fakeData
fakeData.forEach((category) => {
  category.type.forEach((type) => {
    interestOptions.push(type.eventName);
  });
});

function Profile() {
  const { user, setUser } = useContext(UserContext)!;
  const [bio, setBio] = useState("");
  console.log(user?.username);
  const [selectedInterests, setSelectedInterests] = useState<string[]>(
    user?.interests || []
  );

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) => {
      if (prev.includes(interest)) {
        return prev.filter((i) => i !== interest); // Remove the interest if already selected
      } else {
        return [...prev, interest]; // Add the interest if not selected
      }
    });
  };
  const handleSubmit = () => {
    if (!user) return;
    const updatedUser = {
      ...user,
      interests: selectedInterests,
    };
    setUser(updatedUser);
  };
  const handleSubmitBio = () => {
    if (!user) return;
    const updatedUser = {
      ...user,
      bio: bio,
    };
    setUser(updatedUser);
  };

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            borderRadius: "50%",
            padding: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "70px",
            height: "70px",
            marginRight: "20px",
          }}
        >
          {user?.avatar}
        </div>
        <div style={{ fontSize: "36px", fontWeight: "bold", color: "#333" }}>
          {user?.firstName} {user?.lastName}
        </div>
      </div>

      <div
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          color: "#333",
          marginTop: "20px",
          display: "flex",
          alignItems: "center",
        }}
      >
        Interests:
        <div style={{ fontSize: "16px", color: "#555", marginLeft: "10px" }}>
          {user?.interests.join(", ")}
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="edit-button" style={{ marginLeft: "10px" }}>
              <Edit></Edit>
              <style>{`
                .edit-button:hover {
                  background-color: #f0f0f0;
                  cursor: pointer;
                  transform: scale(1.02); /* Reduced scaling */
                  color: #333; /* Change text color on hover */
                }
                .event-card:hover div {
                  color: #333; /* Ensure text color changes */
                }
        `}</style>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit interests</DialogTitle>
              <DialogDescription>
                Make changes to your interests here. Click save when you're
                done.
              </DialogDescription>
            </DialogHeader>
            <ScrollArea
              className="h-72 w-80 rounded-md border"
              style={{ borderColor: "#D1D1D1", scrollbarWidth: "thin" }}
            >
              <div className="p-3">
                {interestOptions.map((interest, index) => (
                  <div key={index} className="items-top flex space-x-2">
                    <Checkbox
                      id={`interest-${index}`}
                      checked={selectedInterests.includes(interest)}
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
            <DialogFooter>
              <Button onClick={handleSubmit} type="submit">
                Save changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          color: "#333",
          marginTop: "20px",
          display: "flex",
          alignItems: "center",
        }}
      >
        Bio:
        <div style={{ fontSize: "16px", color: "#555", marginLeft: "10px" }}>
          {user?.bio}
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="edit-button" style={{ marginLeft: "10px" }}>
              <Edit></Edit>
              <style>{`
                .edit-button:hover {
                  background-color: #f0f0f0;
                  cursor: pointer;
                  transform: scale(1.02); /* Reduced scaling */
                  color: #333; /* Change text color on hover */
                }
                .event-card:hover div {
                  color: #333; /* Ensure text color changes */
                }
        `}</style>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit bio</DialogTitle>
              <DialogDescription>
                Make changes to your bio here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
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
            <DialogFooter>
              <Button onClick={handleSubmitBio} type="submit">
                Save changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
export default Profile;
