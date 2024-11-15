import React, { createContext, useState, ReactNode } from "react";
import {UserMetadata} from "@/fakePeople";

interface UserContextType {
  user: UserMetadata | null;
  setUser: (user: UserMetadata | null) => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserMetadata | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
