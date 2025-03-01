import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import Computers from './pages/Computers';
import Services from './pages/Services';
import Accessories from './pages/Accessories';
import Explore from './pages/Explore';
import Computerdetails from './components/Computerdetails';
import Register from './pages/Register';
import Login from './pages/Login';
import Rooms from "./pages/Rooms.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/user/register" element={<Register />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/computers" element={<Computers />} />
        <Route path="/services" element={<Services />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/computers/:id" element={<Computerdetails />} />
      </Routes>
    </Router>
  );
};

export default App;
