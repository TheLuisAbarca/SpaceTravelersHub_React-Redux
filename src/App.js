import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Missions from './components/Missions/Missions';
import Rockets from './components/Rockets/Rockets';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
