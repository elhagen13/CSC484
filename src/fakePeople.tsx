import {Citrus, Pi, Pyramid, Satellite, Scale, Server, Shrub, Squirrel, User, UtilityPole, Wine} from "lucide-react";

interface Contact {
    id: number;
    firstName: string;
    lastName: string;
    interests: string[];
    bio: string;
    lastClicked: Date;
    avatar: JSX.Element;
}
export const fakePeople: Contact[] = [
    {
      id: 1,
      firstName: "Alice",
      lastName: "Johnson",
      interests: ["Outdoors", "Arts", "Music"],
      bio: "adventure lover",
      lastClicked: new Date(),
      avatar: <User />
    },
    {
      id: 2,
      firstName: "Bob",
      lastName: "Smith",
      interests: ["Sports", "Technology", "Coding"],
      bio: "adventure lover",
      lastClicked: new Date(),
      avatar: <Citrus />
    },
    {
      id: 3,
      firstName: "Charlie",
      lastName: "Brown",
      interests: ["Photography", "Outdoors", "Arts"],
      bio: "adventure lover",
      lastClicked: new Date(),
      avatar: <Pi />
    },
    {
      id: 4,
      firstName: "Diana",
      lastName: "Davis",
      interests: ["Yoga", "Health", "Outdoors"],
      bio: "adventure lover",
      lastClicked: new Date(),
      avatar: <User />
    },
    {
      id: 5,
      firstName: "Ethan",
      lastName: "Miller",
      interests: ["Music", "Arts", "Coding"],
      bio: "adventure lover",
      lastClicked: new Date(),
      avatar: <Pyramid />
    },
    {
      id: 6,
      firstName: "Fiona",
      lastName: "Williams",
      interests: ["Photography", "Arts", "Cooking"],
      bio: "adventure lover",
      lastClicked: new Date(),
      avatar: <User />
    },
    {
      id: 7,
      firstName: "George",
      lastName: "Taylor",
      interests: ["Sports", "Technology", "Music"],
      bio: "adventure lover",
      lastClicked: new Date(),
      avatar: <Satellite />
    },
    {
      id: 8,
      firstName: "Hannah",
      lastName: "Anderson",
      interests: ["Photography", "Travel", "Sports"],
      bio: "adventure lover",
      lastClicked: new Date(),
      avatar: <Squirrel />
    },
    {
      id: 9,
      firstName: "Ivy",
      lastName: "Thomas",
      interests: ["Dance", "Arts", "Cooking"],
      bio: "adventure lover",
      lastClicked: new Date(),
      avatar: <User />
    },
    {
      id: 10,
      firstName: "Jack",
      lastName: "Jackson",
      interests: ["Technology", "Coding", "Gaming"],
      bio: "adventure lover",
      lastClicked: new Date(),
      avatar: <User />
    },
    {
      id: 11,
      firstName: "Katherine",
      lastName: "White",
      interests: ["Health", "Yoga", "Music"],
      bio: "adventure lover",
      lastClicked: new Date(),
      avatar: <UtilityPole />
    },
    {
      id: 12,
      firstName: "Liam",
      lastName: "Harris",
      interests: ["Outdoors", "Sports", "Technology"],
      bio: "wine lover",
      lastClicked: new Date(),
      avatar: <Wine />
    },
    {
      id: 1,
      firstName: "Mia",
      lastName: "Clark",
      interests: ["Cooking", "Photography", "Outdoors"],
      bio: "adventure lover",
      lastClicked: new Date(),
      avatar: <Scale />
    },
    {
      id: 1,
      firstName: "Noah",
      lastName: "Lewis",
      interests: ["Music", "Technology", "Gaming"],
      bio: "I like to have hobbies. Many of them.",
      lastClicked: new Date(),
      avatar: <Shrub />
    },
    {
      id: 1,
      firstName: "Olivia",
      lastName: "Walker",
      interests: ["Arts", "Photography", "Travel"],
      bio: "adventure lover",
      lastClicked: new Date(),
      avatar: <User />
    },
    {
      id: 1,
      firstName: "Paul",
      lastName: "Hall",
      interests: ["Sports", "Health", "Music"],
      bio: "adventure lover",
      lastClicked: new Date(),
      avatar: <Server />
    },
    {
      id: 1,
      firstName: "Quinn",
      lastName: "Young",
      interests: ["Outdoors", "Photography", "Gaming"],
      bio: "adventure lover",
      lastClicked: new Date(),
      avatar: <User />
    },
    {
      id: 1,
      firstName: "Rachel",
      lastName: "King",
      interests: ["Yoga", "Health", "Travel"],
      bio: "adventure lover",
      lastClicked: new Date(),
      avatar: <User />
    },
    {
      id: 1,
      firstName: "Samuel",
      lastName: "Scott",
      interests: ["Technology", "Sports", "Arts"],
      bio: "adventure lover",
      lastClicked: new Date(),
      avatar: <User />
    },
    {
      id: 1,
      firstName: "Tina",
      lastName: "Green",
      interests: ["Dance", "Arts", "Cooking"],
      bio: "adventure lover",
      lastClicked: new Date(),
      avatar: <User />
    }
  ];
  
  export default fakePeople;
  