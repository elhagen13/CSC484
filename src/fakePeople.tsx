import {
  Citrus, PartyPopper,
  Pi,
  Puzzle,
  Pyramid,
  Satellite,
  Scale,
  Server,
  Shrub,
  Squirrel,
  User,
  UtilityPole,
  Wine
} from "lucide-react";

export interface UserMetadata {
    username: string,
    password: string,
    id: number;
    firstName: string;
    lastName: string;
    interests: string[];
    bio: string;
    lastClicked: Date;
    avatar: JSX.Element;
}
export const fakePeople: UserMetadata[] = [
    {
      username: "test",
      password: "test",
      id: 1,
      firstName: "Alice",
      lastName: "Johnson",
      interests: ["Outdoors", "Arts", "Music"],
      bio: "adventure lover",
      lastClicked: new Date(),
      avatar: <User />
    },
    {
      username: "tesssssssst",
      password: "test",
      id: 2,
      firstName: "Bob",
      lastName: "Smith",
      interests: ["Sports", "Technology", "Coding"],
      bio: "adventure lover",
      lastClicked: new Date(),
      avatar: <Citrus />
    },
    {
      username: "test88",
      password: "test",
      id: 3,
      firstName: "Charlie",
      lastName: "Brown",
      interests: ["Photography", "Outdoors", "Arts"],
      bio: "adventure lover",
      lastClicked: new Date(),
      avatar: <Pi />
    },
    {
      username: "test99",
      password: "test",
      id: 4,
      firstName: "Diana",
      lastName: "Davis",
      interests: ["Yoga", "Health", "Outdoors"],
      bio: "adventure lover",
      lastClicked: new Date(),
      avatar: <User />
    },
    {
      username: "test56",
      password: "test",
      id: 5,
      firstName: "Ethan",
      lastName: "Miller",
      interests: ["Music", "Arts", "Coding"],
      bio: "adventure lover",
      lastClicked: new Date(),
      avatar: <Pyramid />
    },
    {
      username: "test44",
      password: "test",
      id: 6,
      firstName: "Fiona",
      lastName: "Williams",
      interests: ["Photography", "Arts", "Cooking"],
      bio: "adventure lover",
      lastClicked: new Date(),
      avatar: <User />
    },
    {
      username: "test33",
      password: "test",
      id: 7,
      firstName: "George",
      lastName: "Taylor",
      interests: ["Sports", "Technology", "Music"],
      bio: "adventure lover",
      lastClicked: new Date(),
      avatar: <Satellite />
    },
    {
      username: "test22",
      password: "test",
      id: 8,
      firstName: "Hannah",
      lastName: "Anderson",
      interests: ["Photography", "Travel", "Sports"],
      bio: "adventure lover",
      lastClicked: new Date(),
      avatar: <Squirrel />
    },
    {
      username: "test11",
      password: "test",
      id: 9,
      firstName: "Ivy",
      lastName: "Thomas",
      interests: ["Dance", "Arts", "Cooking"],
      bio: "adventure lover",
      lastClicked: new Date(),
      avatar: <User />
    },
    {
      username: "tester",
      password: "test",
      id: 10,
      firstName: "Jack",
      lastName: "Jackson",
      interests: ["Technology", "Coding", "Gaming"],
      bio: "adventure lover",
      lastClicked: new Date(),
      avatar: <User />
    },
    {
      username: "testo",
      password: "test",
      id: 11,
      firstName: "Katherine",
      lastName: "White",
      interests: ["Health", "Yoga", "Music"],
      bio: "adventure lover",
      lastClicked: new Date(),
      avatar: <UtilityPole />
    },
    {
      username: "testing",
      password: "test",
      id: 12,
      firstName: "Liam",
      lastName: "Harris",
      interests: ["Outdoors", "Sports", "Technology"],
      bio: "wine lover",
      lastClicked: new Date(),
      avatar: <Wine />
    },
    {
      username: "tests",
      password: "test",
      id: 1,
      firstName: "Mia",
      lastName: "Clark",
      interests: ["Cooking", "Photography", "Outdoors"],
      bio: "adventure lover",
      lastClicked: new Date(),
      avatar: <Scale />
    },
    {
      username: "testtt",
      password: "test",
      id: 1,
      firstName: "Noah",
      lastName: "Lewis",
      interests: ["Music", "Technology", "Gaming"],
      bio: "I like to have hobbies. Many of them.",
      lastClicked: new Date(),
      avatar: <Shrub />
    },
    {
      username: "test5",
      password: "test",
      id: 1,
      firstName: "Olivia",
      lastName: "Walker",
      interests: ["Arts", "Photography", "Travel"],
      bio: "adventure lover",
      lastClicked: new Date(),
      avatar: <User />
    },
    {
      username: "test4",
      password: "test",
      id: 1,
      firstName: "Paul",
      lastName: "Hall",
      interests: ["Sports", "Health", "Music"],
      bio: "adventure lover",
      lastClicked: new Date(),
      avatar: <Server />
    },
    {
      username: "test3",
      password: "test",
      id: 1,
      firstName: "Quinn",
      lastName: "Young",
      interests: ["Outdoors", "Photography", "Gaming"],
      bio: "adventure lover",
      lastClicked: new Date(),
      avatar: <User />
    },
    {
      username: "test2",
      password: "test",
      id: 1,
      firstName: "Rachel",
      lastName: "King",
      interests: ["Yoga", "Health", "Travel"],
      bio: "adventure lover",
      lastClicked: new Date(),
      avatar: <User />
    },
    {
      username: "tsest",
      password: "test",
      id: 1,
      firstName: "Samuel",
      lastName: "Scott",
      interests: ["Technology", "Sports", "Arts"],
      bio: "adventure lover",
      lastClicked: new Date(),
      avatar: <PartyPopper />
    },
    {
      username: "tesddt",
      password: "test",
      id: 1,
      firstName: "Tina",
      lastName: "Green",
      interests: ["Dance", "Arts", "Cooking"],
      bio: "adventure lover",
      lastClicked: new Date(),
      avatar: <Puzzle />
    }
  ];
  
  export default fakePeople;
  