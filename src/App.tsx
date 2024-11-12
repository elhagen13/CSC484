<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login"
import CreateAccount from "./pages/CreateAccount"
import Home from "./pages/Home"

=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Welcome, Login, CreateAccount, ProfilePhoto, Bio, Interests, 
         Home, Contacts, Profile, Search, EventConfirmation, 
         EventAttendees, EditProfile, UserProfile, UserMessage } from './pages';
>>>>>>> 088a70b (Add all necessary pages)

function App() {
  return (
    <div style={{width: '500px', height: '100vh', borderColor:'black', borderWidth: '2px'}}>
<<<<<<< HEAD
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </Router>
=======
      <Router>
        <Routes>
          {/* auth & account reaction */}
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/create-account/profile-photo" element={<ProfilePhoto />} />
          <Route path="/create-account/bio" element={<Bio />} />
          <Route path="/create-account/interests" element={<Interests />} />

          {/* Navbar/ main pages */}
          <Route path="/home" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<EditProfile />} />
          <Route path="/search" element={<Search />} />

          {/* event routes */}
          <Route path="/event/:eventId/confirmation" element={<EventConfirmation />} />
          <Route path="/event/:eventId/attendees" element={<EventAttendees />} />

          {/* user routes */}
          <Route path="/user/:userId/profile" element={<UserProfile />} />
          <Route path="/user/:userId/message" element={<UserMessage />} />
        </Routes>
      </Router>
>>>>>>> 088a70b (Add all necessary pages)
    </div>
  );
}

export default App;
