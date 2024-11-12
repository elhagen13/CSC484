import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Welcome, Login, CreateAccount, ProfilePhoto, Bio, Interests, 
         Home, Contacts, Profile, Search, EventConfirmation, 
         EventAttendees, EditProfile, UserProfile, UserMessage} from './pages'

function App() {
  return (
    <div style={{width: '500px', height: '100vh', borderColor:'black', borderWidth: '2px'}}>
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
    </div>
  );
}

export default App;
