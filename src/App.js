// App.js
import React from 'react';
import Homepage from './components/Homepage.js';
import UserDashboard from './components/IdeaSubmission/UserDashboard.jsx'
import PanelistDashboard from './components/PanelistDashboard/PanelistDashboard.js'
import UserProfile from './components/UserProfile/UserProfile.jsx';
import JudgesDashboard from './components/JudgesDashboard/JudgesDashboard.js';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LoginTest from './components/Login/LoginTest.js';
import Register from './components/Register/Register.jsx';
import PanelistPage from './components/PanelistDashboard/PanelistPage.jsx';
import JudgesPage from './components/JudgesDashboard/JudgesPage.jsx';
function App() {
  return (
    <>
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/userdashboard" element={<UserDashboard/>}/>
          <Route path="/panelistdashboard" element={<PanelistDashboard/>}/>
          <Route path="/panelistpage" element={<PanelistPage/>}/>
          <Route path="/userprofile" element={<UserProfile/>}/>
          <Route path="/judgesdashboard" element={<JudgesDashboard/>}/>
          <Route path='/JudgesPage' element={<JudgesPage/>}/>
          <Route path="/login" element={<LoginTest/>}/>
          <Route path="/register" element={<Register/>}/>

        </Routes>
      </Router>

    </div>
    </>
  );
}

export default App;

