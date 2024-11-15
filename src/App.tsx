import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import ProfilePhoto from "./pages/ProfilePhoto";
import Interests from "./pages/Interests";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Search from "./pages/Search";
import EventConfirmation from "./pages/EventConfirmation";
import EventInfo from "./pages/EventInfo"
import EventAttendees from "./pages/EventAttendees";
import UserProfile from "./pages/UserProfile";
import UserMessage from "./pages/UserMessage";
import Header from "@/components/layout/Header";
import NavigationBar from "@/components/layout/NavigationBar";
import { Toaster } from "./components/ui/toaster";
import {UserProvider} from "@/components/UserProvider";

const AppContent = () => {
  const location = useLocation();

  const noLayoutComponentsPaths = [
    "/",
    "/login",
    "/create-account",
    "/create-account/profile-photo",
    "/create-account/bio",
    "/create-account/interests",
  ];

  return (
    <div style={{ width: '500px', height: '100vh', backgroundColor: 'white', color: 'black', borderColor: 'black', borderWidth: '2px', overflow:'scroll'}}>
      {!noLayoutComponentsPaths.includes(location.pathname) && <Header />}
      <Toaster />
      <Routes>
        {/* auth & account creation routes */}
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route
          path="/create-account/profile-photo"
          element={<ProfilePhoto />}
        />
        <Route path="/create-account/interests" element={<Interests />} />

        {/* Navbar/ main pages */}
        <Route path="/home" element={<Home interests={[]} />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<EditProfile />} />
        <Route path="/search" element={<Search />} />

        {/* event routes */}
        <Route
          path="/event/:eventId/confirmation"
          element={<EventConfirmation />}
        />
        <Route path="/event/:eventId/attendees" element={<EventAttendees />} />

        {/* user routes */}
        <Route path="/user/:userId/profile" element={<UserProfile />} />
        <Route path="/user/:userId/message" element={<UserMessage />} />

        {/* dynamicly routing eventinfo page*/}
        <Route path="/event/:eventId" element={<EventInfo/>} />
      </Routes>

      {!noLayoutComponentsPaths.includes(location.pathname) && (
        <NavigationBar />
      )}
    </div>
  );
};

// done separate like this because we need access to Router for location at time of useLocation() call
const App = () => {
  return (
    <UserProvider>
      <Router>
        <AppContent />
      </Router>
    </UserProvider>
  );
};

export default App;
