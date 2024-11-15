import { Star, User, Camera, Music, Wine, Coffee, Gift, Anchor, Bike, Book } from "lucide-react";

const avatarMap: Record<string, JSX.Element> = {
  star: <Star />,
  user: <User />,
  camera: <Camera />,
  music: <Music />,
  wine: <Wine />,
  coffee: <Coffee />,
  gift: <Gift />,
  anchor: <Anchor />,
  bike: <Bike />,
  book: <Book />,
};

export default avatarMap;
