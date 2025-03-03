import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import Register from './pages/Register';
import Login from './pages/Login';
import Rooms from "./pages/Rooms.jsx";
import RoomInfo from "./pages/RoomInfo.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/user/register" element={<Register />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:roomId" element={<RoomInfo />} /> {/* Define the route for RoomInfo */}
      </Routes>
    </Router>
  );
};

export default App;
