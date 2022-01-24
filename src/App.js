import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route>
        <Route path="/" element={} />
        <Route path="/missions" element={} />
        <Route path="/profile" element={} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
