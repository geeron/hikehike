import { Routes, Route } from 'react-router-dom';
import './App.css';
import SubmitHike from './components/SubmitHike';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import DasboardStart from './components/DashboardStart';
import StartHike from './components/StartHike';




export default function App() {
  return (
    <div className="App__container">
      <Navbar></Navbar>
      <div className="hikes__container">
        <Routes>
          <Route path="/start" element={<DasboardStart />} />
          <Route path="/finish" element={<Dashboard eventsTest='events'/>} />
          <Route path="/hike" element={<StartHike />} />
          <Route path="/submit" element={<SubmitHike />} />
        </Routes>
      </div>
    </div>

  );
}
