import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Missions from './components/Missions/Missions';
import Rockets from './components/Rockets/Rockets';
import Profile from './components/Profile/Profile';
import { getRocketsAction } from './redux/rockets/rockets';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRocketsAction());
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
